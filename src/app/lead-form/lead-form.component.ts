import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import {toSignal} from "@angular/core/rxjs-interop";
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import {NxButtonModule} from "@aposin/ng-aquila/button";
import {NxCheckboxModule} from "@aposin/ng-aquila/checkbox";
import {NxCopytextModule} from "@aposin/ng-aquila/copytext";
import {NxFormfieldLabelDirective, NxFormfieldModule,} from "@aposin/ng-aquila/formfield";
import {NxIconModule} from "@aposin/ng-aquila/icon";
import {NxInputModule} from "@aposin/ng-aquila/input";
import {NxPhoneInputComponent} from "@aposin/ng-aquila/phone-input";
import {NxMultiStepperComponent, NxStepComponent,} from "@aposin/ng-aquila/progress-stepper";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import countries from "i18n-iso-countries";
import {debounceTime} from "rxjs";
import {Agency, AgencyListService,} from "src/app/core/services/agency-list.service";
import {AppDatastore} from "src/app/core/services/app-store/app.datastore";
import {SourceResult, SourcesService,} from "src/app/core/services/sources/sources.service";
import {InitialAppParamsService} from "src/app/modules/initial-app-params/initial-app-params.service";
import {environment} from "src/environments/environment";
import {ImageProfileResult, ImageProfileService} from "../core/services/profile-image/image-profile.service";
import {NgxTurnstileModule} from "ngx-turnstile";
import {DEFAULT_LANGUAGE, EMAIL_BLACKLIST, FORM_SUBMIT_COOLDOWN_MS, LEAD_RATING} from "../constants";
import {LeadNavigatorService, ValidationResult} from "../core/services/lead-navigator/lead-navigator.service";
import {NxDataDisplayModule} from "@aposin/ng-aquila/data-display";
import {NxLinkModule} from "@aposin/ng-aquila/link";
import {
  AdobeAnalytics,
  CONSULTATION_COMPLETE,
  CONSULTATION_START,
  PAGE_VIEW,
  TRIGGER_ERROR_FORM_SUBMIT,
  TRIGGER_SPAM_EMAIL,
  TRIGGER_SPAM_HONEYPOT,
  TRIGGER_SPAM_RAPID_SUBMISSION
} from "../core/services/adobe-analytics/adobe-analytics";
import {LeadMailService, MailDataClass} from "../core/services/lead-mail/lead.mail.service";
import {NxColComponent, NxLayoutComponent, NxRowComponent} from "@aposin/ng-aquila/grid";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {NxFigureComponent} from "@aposin/ng-aquila/image";
import {NxHeadlineComponent} from "@aposin/ng-aquila/headline";

@Component({
  selector: "app-lead-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NxMultiStepperComponent,
    NxStepComponent,
    NxFormfieldModule,
    NxPhoneInputComponent,
    NxCheckboxModule,
    NxIconModule,
    NxInputModule,
    TranslateModule,
    NxButtonModule,
    NxCopytextModule,
    NxFormfieldLabelDirective,
    NgxTurnstileModule,
    NxDataDisplayModule,
    NxLinkModule,
    NxColComponent,
    NxRowComponent,
    NxLayoutComponent,
    CdkTextareaAutosize,
    NxFigureComponent,
    NxHeadlineComponent,
  ],
  templateUrl: "./lead-form.component.html",
  styleUrl: "./lead-form.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class LeadFormComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private fb = inject(UntypedFormBuilder);
  private agencyListService = inject(AgencyListService);
  private translateService = inject(TranslateService);
  public appDataStore = inject(AppDatastore);
  private sourcesService = inject(SourcesService);
  private initialAppParamsService = inject(InitialAppParamsService);
  private imageProfileService = inject(ImageProfileService);
  private leadNavigatorService = inject(LeadNavigatorService);
  private adobeAnalytics = inject(AdobeAnalytics);
  private leadMailService = inject(LeadMailService);

  readonly leadFormGroup = this.fb.group({
    zip: ["", [Validators.required, this.zipCodeValidator()]],
    email: ["", [Validators.required, this.emailValidator()]],
    phone: ["+41", [Validators.required, Validators.minLength(12), Validators.maxLength(16)]], //this.validateCountryCodesPhone()
    availability: "",
    firstname: ["", Validators.required],
    message: ['', Validators.maxLength(512)],
    bot: ['', this.hiddenFieldValidator()]
  });

  formValueChanges = toSignal(
    this.leadFormGroup.valueChanges.pipe(debounceTime(300)),
  );

  decodedEmail = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.preselectedEmail || "",
  );
  isLeadGeneratorLink = computed(() => {
    return this.decodedEmail() !== "";
  });
  agencies = toSignal(this.agencyListService.getList(), {initialValue: []});
  showDebug = computed(
    () => this.initialAppParamsService.initialAppParams()?.debug,
  );
  translatedCountries = computed(() => {
    const language = this.language();
    if (language) {
      return countries.getNames(language, {
        select: "official",
      });
    } else {
      return countries.getNames(DEFAULT_LANGUAGE, {
        select: "official",
      });
    }
  });
  externalLink = computed(
    () => this.initialAppParamsService.initialAppParams()?.externalLink,
  );
  language = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.language ||
      DEFAULT_LANGUAGE,
  );
  campaign = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.campaign || "default"
    );
  });
  ga = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.agency?.id || "AS701"
    );
  });

  protected profileImageData = signal(new ImageProfileResult());

  @ViewChild("stepper") private myStepper!: NxMultiStepperComponent;

  // Non reactive properties
  protected turnstileIsValid = false;
  protected readonly environment = environment;
  private lastSubmissionTime = 0;
  protected customerValidation = new ValidationResult();
  protected routingMethodDebug: string | undefined;
  protected tokenControl = new FormControl();
  protected mailData: MailDataClass | undefined;
  private testZipCodes = ['9999', '9998', '9997', '9996'];


  constructor() {
    effect(() => {
      //this.trackingService.appLanguage = this.language();
    });
    effect(async () => {
      if (this.decodedEmail()) {
        this.leadFormGroup.controls["zip"].clearValidators();
        this.leadFormGroup.controls["zip"].updateValueAndValidity();
        this.profileImageData.set(await this.imageProfileService.fetchKbImageLink(this.decodedEmail()))
      }
    });
    effect(() => {
      if (
        this.initialAppParamsService.initialAppParams()?.preselectedByDParam
      ) {
        // we set the lead 'origin' (evar211) to indicate a lead from the leadgenerator.allianz.ch tool
        //this.trackingService.ls_origin = LEAD_BY_YOU_APP_ID;
      }
    });
    effect(() => {
      // Agency have been preselected
      // Preload the translations files for this agency
      const agency = this.initialAppParamsService.initialAppParams()?.agency;
      if (agency) {
        this.addAgencyLanguage(agency);
      }
    });
    effect(() => {
      const agency = this.initialAppParamsService.initialAppParams()?.agency;
      if (agency) {
        //this.trackingService.ls_gaID = agency.id;
      }
    });
    effect(async () => {

        console.log('in effect with campaign');
        this.adobeAnalytics.track(
          this.adobeAnalytics.buildApplicationObject('start'),
          this.adobeAnalytics.buildPageObject(),
          this.adobeAnalytics.buildEventObject(PAGE_VIEW),
          this.adobeAnalytics.buildLeadObject(),
        );
        this.adobeAnalytics.track(
          this.adobeAnalytics.buildApplicationObject('start'),
          this.adobeAnalytics.buildPageObject(),
          this.adobeAnalytics.buildEventObject(CONSULTATION_START),
          this.adobeAnalytics.buildLeadObject(),
        );
    })
  }

  ngOnInit(): void {
    // clear validators in case the customer came to the form via a personal leadGenerator link
    if (this.isLeadGeneratorLink()) {
      this.leadFormGroup.controls['zip'].clearValidators();
      this.leadFormGroup.controls['zip'].updateValueAndValidity();
    }

  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
  }

  public async onsubmit(): Promise<void> {

    let agency: Agency;
    let source: SourceResult | undefined;

    //honeypot field must be empty
    if (this.leadFormGroup.value.bot.length > 0) {
      console.warn('Bot detected!', this.leadFormGroup.value.bot);
      this.adobeAnalytics.trackEvent(TRIGGER_SPAM_HONEYPOT)
      return;
    }

    // prevent rapid form submissions
    const now = Date.now();
    if (now - this.lastSubmissionTime < FORM_SUBMIT_COOLDOWN_MS) {
      console.warn('Rapid form submissions are not allowed.');
      this.adobeAnalytics.trackEvent(TRIGGER_SPAM_RAPID_SUBMISSION);
      return;
    }
    this.lastSubmissionTime = now;

    try {

      // we need to know an agency and its zip code before we query dsp-bff-lead-navi service.
      // if the lead is from a leadgenerator.allianz.ch link (e.g. ?d=XYZ....&ga=AS071)
      // we use the ga-key to determine the agency zip code otherwise the zip field value.
      // note: we will always pick the first agency from the result (some agencies have overlapping zip code ranges)
      if (this.isLeadGeneratorLink()) {
        agency = this.agencyListService.getById(this.ga())[0];
      } else {
        agency = this.agencyListService.getByZip(this.leadFormGroup.value.zip)[0];
      }

      // identify customer
      this.customerValidation = await this.leadNavigatorService.validateByEmailPhoneZip(
        this.leadFormGroup.value.email,
        agency.plz[0],
        this.leadFormGroup.value.phone,
      );

      // update the agency in case we matched a customer (mainly to determine the agency language)
      //TODO: Issue -> if an agency from the database is not in the agency.json list we fallback to default test-agency (checkAgency)
      if (this.isCustomer(this.customerValidation)) {
        agency = this.agencyListService.getById(this.customerValidation.ga)[0];
      }

      // We save the application language and change the currentLanguage to the agency language
      // This is to retrieve the agency local subject for the email we are gonna send
      // The agency language translations are hopefully loaded by now here
      // The translations might not be loaded if agency language is different then application language
      // and user is on slower network or user clcks Submit button right after entering their zipCode
      // then we restore the application language.
      // Doing this by using `set currentLang(lang)` doesn't cause application to rerender
      // with updated language so it's perfect for getting instant value of translation
      // Better way would be to ise Observables on template Rendere (not implemented) and on translation service
      // before we send the email.
      const currentLanguage = this.translateService.currentLang;
      this.translateService.currentLang = agency.language.toLowerCase();
      const subject = this.translateService.instant('mail.subject');
      this.translateService.currentLang = currentLanguage;

      // determine source values
      source = this.checkSource(this.sourcesService.getSource(environment.applicationId, this.campaign(), this.externalLink() ?? ""));

      // send mail
      this.sendMailLead(agency, source, subject, this.determineRecipientEmail(agency));

      this.trackSubmit(source.origin);

      this.myStepper.next();
    } catch (e) {
      this.adobeAnalytics.trackEvent(TRIGGER_ERROR_FORM_SUBMIT)
      console.error(e)
    }
  }

  /**
   * Send the lead email to the recipient
   * on the lead-4-you-be service
   * @param agency
   * @param source
   * @param mailSubject
   * @param recipient
   * @private
   */
  private sendMailLead(agency: Agency, source: SourceResult, mailSubject: string, recipient: string) {
    const mailData: MailDataClass = {
      leadApp: environment.applicationId, //required
      leadInternalRating: LEAD_RATING,
      source_woher: source.woher,
      source_was: source.was,
      source_formUrl: source.url,
      source_origin: source.origin,
      source_campaign: this.campaign(),
      source_source: source.source,
      source_category: source.category,
      leadComments: this.leadFormGroup.value.comments,
      leadEnvironment: environment.stage,
      leadTS: new Date().toLocaleString('de-CH'),
      mailSubject: mailSubject,
      mailRecipient: environment.stage.toUpperCase() == 'PROD' ? recipient : environment.defaultEmail, //required, we only use the actual recipient in production
      mailLanguage: agency.language, //required
      customerAvailability: this.leadFormGroup.value.availability.toString(),
      customerName: this.leadFormGroup.value.firstname, //required
      customerLanguage: this.language(),
      customerZipCode: this.isLeadGeneratorLink() ? agency.plz[0] : this.leadFormGroup.value.zip, //required,
      customerPhoneNumber: this.leadFormGroup.value.phone,
      customerEmail: this.leadFormGroup.value.email, //required
      customerNumber: this.customerValidation.customerNumber ? this.customerValidation.customerNumber : '',
      policyNumber: '',
      agent: this.customerValidation.customerAgentNumber,
      sender: '', //Leadforwarding
      products: [''],
      attachments: [''],
      additionalInformation: {},
      customer: this.isCustomer(this.customerValidation),
      agency: agency.id,
    };
    this.mailData = new MailDataClass(mailData);
    console.log('final leadMail', this.mailData);
    this.leadMailService.sendEmail(this.mailData).subscribe();
  }


  /**
   *  Determine which recipient email is used for lead-routing.
   *  Order of importance:
   *    1: TEST Zip codes
   *    2: Lead-Navigator Service
   *    3: Lead-Generator Email
   *    4: Agency-Service with zip code from Form-input
   * @private
   * @param agency
   */
  private determineRecipientEmail(agency: Agency): string {
    // if we use test-zip codes [9999, 9998, 9997, 9996]
    // we send mails to our default-inbox
    if (this.testZipCodes.includes(this.leadFormGroup.value.zip)) {
      this.routingMethodDebug = 'TEST-ZIP ' + this.leadFormGroup.value.zip + ' routing to: leadswettbewerb@allianz.ch'
      return environment.defaultEmail;
    }
    // if a customer is found we always use the routing email from the service
    if (this.isCustomer(this.customerValidation)) {
      this.routingMethodDebug = 'LEAD-NAVIGATOR (Flux) routing to: ' + this.customerValidation.routingEmail
      return this.customerValidation.routingEmail;
    }
    //  kb-email from the lead-generator link
    if (this.isLeadGeneratorLink()) {
      this.routingMethodDebug = 'LEAD-GENERATOR (LeadByYou) routing to: ' + this.initialAppParamsService.initialAppParams()?.preselectedEmail;
      return this.initialAppParamsService.initialAppParams()?.preselectedEmail || environment.defaultEmail;
    }
    // zip code form input field
    if (!this.testZipCodes.includes(this.leadFormGroup.value.zip)) {
      this.routingMethodDebug = 'LEAD-AGENCY (Agency.json) routing to: ' + agency.email;
      return agency.email;
    }
    return environment.defaultEmail;
  }

  /**
   * Preloads missing language translation files for the agency
   * so the translations can be used when generating lead email
   *
   * @param agency agency for which the language files will be preloaded
   */
  private addAgencyLanguage(agency: Agency) {
    const availableLanguages = [
      ...Object.keys(this.translateService.translations),
    ];
    if (!availableLanguages.includes(agency.language.toLowerCase())) {
      this.translateService.reloadLang(agency.language.toLowerCase());
      availableLanguages.push(agency.language.toLowerCase());
    }
  }

  /**
   * Track the submit event
   * @param origin
   * @private
   */
  private trackSubmit(origin: string) {
    // Adobe Analytics
    this.adobeAnalytics.track(
      this.adobeAnalytics.buildApplicationObject('success'),
      this.adobeAnalytics.buildPageObjectCustom('success'),
      this.adobeAnalytics.buildEventObject(PAGE_VIEW),
      this.adobeAnalytics.buildLeadObject(origin),
    );
    this.adobeAnalytics.track(
      this.adobeAnalytics.buildApplicationObject('success'),
      this.adobeAnalytics.buildPageObject(),
      this.adobeAnalytics.buildEventObject(CONSULTATION_COMPLETE),
      this.adobeAnalytics.buildLeadObject(origin),
    );
  }

  // formValidation and cloudFlare must both be valid before the submit button can be activated
  isDisabled(): boolean {
    if (this.leadFormGroup.valid) {
      return !this.turnstileIsValid;
    } else {
      return true;
    }
  }

  // on success from turnstile (enable submit button)
  onResolved(response: string | null) {
    this.turnstileIsValid = true;
  }

// on failure from turnstile (disable submit button)
  onErrored(errorCode: string | null) {
    this.turnstileIsValid = false;
  }

  /**
   * Email validator  (blacklist and structure)
   * @private
   */
  private emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value;
      if (!email) {
        return null;
      }
      // regex for validating email structure
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        return {invalidEmail: true};
      }

      // regex word-matching full domain name (e.g. fakemail.com), case-insensitive
      const domain = email.split('@')[1];
      const regex = new RegExp(`^${domain}$`, 'i');
      if (EMAIL_BLACKLIST.some((item) => regex.test(item))) {
        //console.error('Blacklisted domain detected', email.split('@')[1]);
        this.adobeAnalytics.trackEvent(TRIGGER_SPAM_EMAIL, domain, 'blacklisted domain');
        return {blacklistedDomain: true};
      }
      // regex for uppercase characters (common pattern observed by sea-bots)
      // might prevent honest users from submitting but uppercase emails are rare
      const uppercaseRegex = /[A-Z]/;
      if (uppercaseRegex.test(email)) {
        //console.error('UpperCase email detected', email);
        this.adobeAnalytics.trackEvent(TRIGGER_SPAM_EMAIL, email.replace("@", "#"), 'uppercase email');
        return {uppercaseEmail: true};
      }
      return null;
    };
  }

  /**
   * Validate the zip code
   * Only 4 digits are allowed
   * and the zip code must be in the agency list
   * @private
   */
  private zipCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const zip = control.value;
      if (!zip) {
        return null;
      }
      // regex for validating zip structure (max 4 digits and only numbers)
      const zipRegex = /^[0-9]{4}$/;
      // valid zip and code must be in agency list
      if (!zipRegex.test(zip) || this.agencyListService.getByZip(zip).length === 0) {
        return {invalidZip: true};
      }
      return null;
    };
  }

  private hiddenFieldValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      if (value.length > 0) {
        // console.warn('VALIDATOR: Honeypot field has been filled out. Bot detected!');
        this.adobeAnalytics.trackEvent(TRIGGER_SPAM_HONEYPOT, value);
        return {invalidValue: true};
      }
      return null;
    }
  }

  // due to a PEN-TEST finding for the dsp-bff-lead-navi service,
  // we are not allowed to indicate in the payload response if a customer was found or not
  // for given input (e.g. return -> isCustomer=true) so we check the response for the customer number.
  // the assumption is that every known customer has a customer number in the database
  private isCustomer(queryResult: ValidationResult): boolean {
    return !!(queryResult.customerNumber && queryResult.customerNumber.length > 0);
  }

  // update the language according to the zip code in the agency-list  (used for email translations before submit)
  onZipChange() {
    const agenciesWithZip = this.agencyListService.getByZip(
      this.leadFormGroup.value.zip,
    );
    for (const agency of agenciesWithZip) {
      this.addAgencyLanguage(agency);
    }
  }

  //TODO: Should be fixed in service. Currently broken, will not be fixed here
  private checkSource(source: SourceResult | undefined): SourceResult {
    if (typeof source === 'undefined' || source == null || source.was == '') {
      return new (class implements SourceResult {
        was = 'Exception in determining the source.';
        woher = environment.applicationId;
        url = environment.stage;
        origin = '';
        source = '';
        category = 'error';
      })();
    } else {
      return source;
    }
  }

  //TODO: Waiting for input from nico to refine logic (currently disabled)
  private validateCountryCodesPhone(): ValidatorFn {

    let allowedCountryCodes = [
      '33',
      '34',
      '39',
      '41',
      '43',
      '44',
      '49',
      '423',
    ]

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      let regex = new RegExp(allowedCountryCodes.map(function (x) {
        return x.replace(/\\+/g, '\\+')
      }).join("|"));

      return !regex.test(value) ? {validCode: false} : null;
    }
  }
}

