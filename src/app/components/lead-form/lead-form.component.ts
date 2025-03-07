import {CdkTextareaAutosize} from "@angular/cdk/text-field";
import {
  Component,
  computed,
  CreateEffectOptions,
  effect,
  HostListener,
  inject,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {toSignal} from "@angular/core/rxjs-interop";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import {NxButtonModule} from "@aposin/ng-aquila/button";
import {NxCheckboxModule} from "@aposin/ng-aquila/checkbox";
import {NxCopytextModule} from "@aposin/ng-aquila/copytext";
import {NxDataDisplayModule} from "@aposin/ng-aquila/data-display";
import {NxFormfieldLabelDirective, NxFormfieldModule,} from "@aposin/ng-aquila/formfield";
import {NxColComponent, NxLayoutComponent, NxRowComponent} from "@aposin/ng-aquila/grid";
import {NxHeadlineComponent} from "@aposin/ng-aquila/headline";
import {NxIconModule} from "@aposin/ng-aquila/icon";
import {NxFigureComponent} from "@aposin/ng-aquila/image";
import {NxInputModule} from "@aposin/ng-aquila/input";
import {NxLinkModule} from "@aposin/ng-aquila/link";
import {NxPhoneInputComponent} from "@aposin/ng-aquila/phone-input";
import {NxMultiStepperComponent, NxStepComponent,} from "@aposin/ng-aquila/progress-stepper";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import countries from "i18n-iso-countries";
import {NgxTurnstileModule} from "ngx-turnstile";
import {Agency, AgencyListService,} from "src/app/core/services/agency/agency-list.service";
import {SourceResult, SourcesService,} from "src/app/core/services/sources/sources.service";
import {InitialAppParamsService} from "src/app/core/services/initial-app-params/initial-app-params.service";
import {environment} from "src/environments/environment";
import {DEFAULT_LANGUAGE, EMAIL_BLACKLIST, FORM_SUBMIT_COOLDOWN_MS, LEAD_RATING, TEST_ZIP_CODES} from "../../constants";
import {
  AdobeAnalytics,
  CONSULTATION_COMPLETE,
  CONSULTATION_START,
  PAGE_VIEW,
  TRIGGER_CUSTOMER_MATCH,
  TRIGGER_ERROR_FORM_SUBMIT,
  TRIGGER_IS_CUSTOMER_LEAD,
  TRIGGER_IS_LEAD_GENERATOR_LEAD,
  TRIGGER_SPAM_EMAIL,
  TRIGGER_SPAM_HONEYPOT,
  TRIGGER_SPAM_RAPID_SUBMISSION
} from "../../core/services/adobe-analytics/adobe-analytics";
import {LeadMailService, MailDataClass} from "../../core/services/lead-mail/lead.mail.service";
import {LeadNavigatorService, ValidationResult} from "../../core/services/lead-navigator/lead-navigator.service";
import {ImageProfileResult, ImageProfileService} from "../../core/services/profile-image/image-profile.service";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

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
    NgOptimizedImage,
  ],
  templateUrl: "./lead-form.component.html",
  styleUrl: "./lead-form.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class LeadFormComponent implements OnInit {

  // Injectables
  private fb = inject(UntypedFormBuilder);
  private agencyListService = inject(AgencyListService);
  private translateService = inject(TranslateService);
  private sourcesService = inject(SourcesService);
  protected initialAppParamsService = inject(InitialAppParamsService);
  private imageProfileService = inject(ImageProfileService);
  private leadNavigatorService = inject(LeadNavigatorService);
  private adobeAnalytics = inject(AdobeAnalytics);
  private leadMailService = inject(LeadMailService);
  private router = inject(Router)

  // Form group
  leadFormGroup = this.fb.group({
    zip: ["", [Validators.required, this.zipCodeValidator()]],
    email: ["", [Validators.required, this.emailValidator()]],
    phone: ["+41", [Validators.required, Validators.minLength(12), Validators.maxLength(16), this.numbersOnlyValidator()],],
    availability: "",
    firstname: ["", [Validators.required, Validators.minLength(8)]],
    message: ['', Validators.maxLength(512)],
    bot: ['', this.hiddenFieldValidator()]
  });

  // Stepper
  @ViewChild("stepper") private myStepper!: NxMultiStepperComponent;

  // Signal to track profile image data
  protected profileImageData = signal(new ImageProfileResult());

  // Signal to track form submission status
  private formSubmitted = signal<boolean>(false);

  // Signal that indicates whether the service has completed initialization
  private isReady = signal<boolean>(false);

  // Allow signal writes inside the effect
  private effectOptions: CreateEffectOptions = {allowSignalWrites: true};

  // image paths for debug data on success page
  protected imagePathMatch = environment.baseHref + 'assets/img/match.jpg';
  protected imagePathNoMatch = environment.baseHref + 'assets/img/no-match.png';


  // Computed properties
  // ---------------------------------------------------------------------------
  decodedEmail = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.preselectedEmail || "",
  );

  isCustomerMatch = computed(() => {
    return this.isCustomer(this.customerValidation);
  });

  isLeadGeneratorLink = computed(() => {
    return this.decodedEmail() !== "";
  });

  agencies = toSignal(this.agencyListService.getList(), {initialValue: []});

  showDebug = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.debug || false);
  });

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
  language = computed(() => {
      return (
        this.initialAppParamsService.initialAppParams()?.language ||
        DEFAULT_LANGUAGE
      )
    }
  );
  campaign = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.campaign || "default"
    );
  });
  ga = computed(() => {
    return (
      console.log('LeadForm: computed GA: ', this.initialAppParamsService.initialAppParams()?.agency?.id || environment.defaultAgencyID),
      this.initialAppParamsService.initialAppParams()?.agency?.id || environment.defaultAgencyID
    );
  });


  // Non reactive properties
  protected turnstileIsValid = false;
  protected turnstileIsValidValidation = true; //initial
  protected readonly environment = environment;
  private lastSubmissionTime = 0;
  protected customerValidation = new ValidationResult();
  protected routingMethodDebug: string | undefined;
  protected tokenControl = new FormControl();
  protected mailData: MailDataClass | undefined;

  // Flag to track if analytics have been sent
  private analyticsSent = false;

  constructor() {

    // fetch profile image
    effect(async () => {
      if (this.decodedEmail()) {
        this.leadFormGroup.controls["zip"].clearValidators();
        this.leadFormGroup.controls["zip"].updateValueAndValidity();
        this.profileImageData.set(await this.imageProfileService.fetchKbImageLink(this.decodedEmail()))
      }
    });

    effect(() => {
      if (this.initialAppParamsService.isInitialized()) {
        this.translateService.use(this.language());
      }
    });
    effect(() => {
      // Agency have been preselected
      // Preload the translations files for this agency
      if (this.initialAppParamsService.isInitialized()) {
        const agency = this.initialAppParamsService.initialAppParams()?.agency;
        if (agency) {
          this.addAgencyLanguage(agency);
        }
      }
    });

    // track initial page-view and consultation start event
    effect(() => {
      if (this.initialAppParamsService.isInitialized() && !this.analyticsSent) {
        if (this.analyticsSent) {
          console.warn('Initial analytics already sent, skipping');
          return;
        }
        this.adobeAnalytics.trackPageView('start', undefined, PAGE_VIEW);
        this.adobeAnalytics.trackEvent(CONSULTATION_START);
        this.analyticsSent = true;
      }
    }, this.effectOptions);

    // track form submission analytics
    effect(() => {
      if (this.formSubmitted()) {
        this.adobeAnalytics.trackEvent(CONSULTATION_COMPLETE);
        this.adobeAnalytics.trackPageView('success', '', PAGE_VIEW);

        // track if it was a leadByYou lead
        if (this.isLeadGeneratorLink()) {
          this.adobeAnalytics.trackEvent(TRIGGER_IS_LEAD_GENERATOR_LEAD, this.adobeAnalytics.ga(), 'leadByYou');
        }
        if (this.isCustomerMatch()) {
          this.adobeAnalytics.trackEvent(TRIGGER_IS_CUSTOMER_LEAD)
        }
        //Reset the form submission state after a delay to avoid duplicate tracking
        setTimeout(() => {
          this.resetFormSubmissionState();
        }, 2000);
      }
    }, this.effectOptions);
  }


  // Add a host listener for the beforeunload event
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): void {
    // Track the last field interaction before the user leaves the page
    this.adobeAnalytics.trackExitAnalytics();
    event.returnValue = '';
  }

  ngOnInit(): void {
    // clear validators in case the customer came to the form via a personal leadGenerator link
    // zip input from the user is then not required for email routing
    // (set already by base64 hashed email in query param d=)
    // note: in case we match the customer with the lead-navigator service. the routing email
    // from the lead-navigator response takes precedence
    if (this.isLeadGeneratorLink()) {
      this.leadFormGroup.controls['zip'].clearValidators();
      this.leadFormGroup.controls['zip'].updateValueAndValidity();
    }

    // if(this.language()){
    //   this.translateService.set
    // }
    // adobe analytics tracking for form field interactions
    this.adobeAnalytics.setupFormFieldTracking(this.leadFormGroup);
  }

  public async onsubmit(): Promise<void> {

    let agency: Agency;
    let source: SourceResult | undefined;

    if (this.showDebug()) console.log('form valid before validation: ', this.leadFormGroup.valid)
    if (this.showDebug()) console.log('turnstile before validation: ', this.turnstileIsValidValidation)

    // validate form input
    this.validateAllRequiredFields();

    if (this.showDebug()) console.log('form valid after validation: ', this.leadFormGroup.valid)
    if (this.showDebug()) console.log('turnstile valid after validation: ', this.turnstileIsValidValidation)

    if (!this.leadFormGroup.valid) return;
    if (!this.turnstileIsValidValidation) return;

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
      if (this.isCustomerMatch()) {
        this.adobeAnalytics.trackEvent(TRIGGER_CUSTOMER_MATCH, '', this.customerValidation.customerNumber)
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

      // determine source values (based on agency language)
      source = this.checkSource(this.sourcesService.getSource(environment.applicationId, this.campaign(), this.externalLink() ?? ""));

      // translate mail subject
      const subject = this.translateService.instant("app.mail.subject", {value: source.woher})

      // reset language
      this.translateService.currentLang = currentLanguage;

      // send mail
      this.sendMailLead(agency, source, subject, this.determineRecipientEmail(agency));

      // Set form as submitted to trigger the analytics effect
      this.formSubmitted.set(true);

      // go to success step
      this.myStepper.next();
    } catch (bad) {
      this.adobeAnalytics.trackEvent(TRIGGER_ERROR_FORM_SUBMIT)
      this.formSubmitted.set(false);
      console.error(bad)
      await this.router.navigate(['/error', '500'], {
        queryParams: {message: bad},
        state: {attemptedAction: bad},
        queryParamsHandling: 'preserve'
      });
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
  private sendMailLead(agency: Agency, source: SourceResult, mailSubject: string = "", recipient: string) {
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
    if (this.showDebug()) console.log('leadMail-data:', this.mailData);
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
    if (TEST_ZIP_CODES.includes(this.leadFormGroup.value.zip)) {
      this.routingMethodDebug = 'TEST-ZIP ' + this.leadFormGroup.value.zip;
      return environment.defaultEmail;
    }
    // if a customer is found we always use the routing email from the service
    if (this.isCustomer(this.customerValidation)) {
      this.routingMethodDebug = 'LEAD-NAVIGATOR (Flux) routing';
      return this.customerValidation.routingEmail;
    }
    //  kb-email from the lead-generator link
    if (this.isLeadGeneratorLink()) {
      this.routingMethodDebug = 'LEAD-GENERATOR (LeadByYou) routing to: ' + this.initialAppParamsService.initialAppParams()?.preselectedEmail;
      return this.initialAppParamsService.initialAppParams()?.preselectedEmail || environment.defaultEmail;
    }
    // zip code form input field
    if (!TEST_ZIP_CODES.includes(this.leadFormGroup.value.zip)) {
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

  // CloudFlare
  // ---------------------------------------------------------------------------------------

  // on success from turnstile
  onResolved(response: string | null) {
    this.turnstileIsValid = true;
    this.turnstileIsValidValidation = true;
  }

  // on failure from turnstile
  onErrored(errorCode: string | null) {
    this.turnstileIsValid = false;
    //this.turnstileIsValidValidation = false;
  }


  // VALIDATION
  // ---------------------------------------------------------------------------------------


  // Email validator  (blacklist and structure)
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
        if (this.showDebug()) console.error('Blacklisted domain detected', email.split('@')[1]);
        this.adobeAnalytics.trackEvent(TRIGGER_SPAM_EMAIL, domain, 'blacklisted domain');
        return {blacklistedDomain: true};
      }
      // regex for uppercase characters (common pattern observed by sea-bots)
      // might prevent honest users from submitting but uppercase emails are rare
      const uppercaseRegex = /[A-Z]/;
      if (uppercaseRegex.test(email)) {
        if (this.showDebug()) console.error('UpperCase email detected', email);
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

  private numbersOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      // Updated regex to allow a "+" at the beginning followed by numbers only
      const numbersWithPlusRegex = /^\+?[0-9]+$/;
      if (!numbersWithPlusRegex.test(value)) {
        return {numbersOnly: true};
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
        if (this.showDebug()) console.warn('VALIDATOR: Honeypot field has been filled out. Bot detected!');
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

  // validate the form before submitting
  validateAllRequiredFields() {
    if (!this.turnstileIsValid) {
      this.turnstileIsValidValidation = false;
    }
    this.validateAllFormFields(this.leadFormGroup)
  }

  // touch each form control to force validation
  private validateAllFormFields(leadFormGroup: FormGroup) {
    Object.keys(leadFormGroup.controls).forEach(field => {
      const control = leadFormGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
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


  // reset the form submission state
  // this prevents duplicate tracking if the component is not destroyed
  private resetFormSubmissionState(): void {
    this.formSubmitted.set(false);
  }
}

