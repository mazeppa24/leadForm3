import {Component, Inject} from '@angular/core';

// Set Local
import {TranslateService} from '@ngx-translate/core';
import {NX_DATE_LOCALE, NxDateAdapter} from '@aposin/ng-aquila/datefield';
import {Moment} from 'moment';
import {environment} from '../environments/environment';

// App Store
import {AppDatastore} from './core/services/app-store/app.datastore';

// Spinner
import {ActivatedRoute, Event as RouterEvent, NavigationStart, Router} from '@angular/router';

// AEM Management
import {EmbeddedDataService} from '@allianz/ngx-aem-integration';
import {AEMConfiguration} from './aemconfiguration.interface';
import {Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

/**
 * This is the main component of the application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Local for the Date formating etc
  public anio: number = new Date().getFullYear();
  private userlang: string = '';
  public currentLocale: any = null;
  public client = environment.client;
  // Sets initial value to true to show loading spinner on first load

  public loading = true;

  /**
   * Used to start up the application, set the userlanguage and initialize the appstore. It is also used to authorize the User.
   *
   * @param translate - Translation service
   * @param appDataStore - App storage Service
   * @param nxDateAdapter - Date validator
   * @param nxDateLocale - Local format for date
   * @param route - Active Route Service
   * @param router - used to show / hide the spinner
   * @param embeddedDataService AEM Config
   * @param title
   * @param translateService
   * @param document
   */
  constructor(
    public translate: TranslateService,
    private appDataStore: AppDatastore,
    public nxDateAdapter: NxDateAdapter<Moment>,
    @Inject(NX_DATE_LOCALE) public nxDateLocale: string,
    private route: ActivatedRoute,
    private router: Router,
    private embeddedDataService: EmbeddedDataService<null, AEMConfiguration>,
    private title: Title,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    // ------------ AEM Management ------------------------
    let userLastName = '';
    let aemLanguage = '';
    if (embeddedDataService.ContextConfiguration != null) {
      if (embeddedDataService.CustomConfiguration != null) {
        userLastName = embeddedDataService.CustomConfiguration.userlastname;
      }
      aemLanguage = embeddedDataService.ContextConfiguration.language;
    }
    // ------------ End AEM Management --------------------

    // ------------ Language Management -------------------
    const applicationLanguages: string[] = ['de', 'fr', 'it', 'en'];
    this.loading = true;

    // Get URL language
    this.route.queryParams.subscribe((params) => {
      const userlangparam = 'lang';
      let bodylang = '';
      this.userlang = params[userlangparam];
      // Initialize translate
      translate.addLangs(applicationLanguages);
      translate.setDefaultLang('de');

      // Get Browser language or Adobe Language
      let navigatorLanguage = '';
      if (aemLanguage === '') {
        navigatorLanguage = navigator.language;
        navigatorLanguage = navigatorLanguage.split('-')[0];
      } else {
        navigatorLanguage = aemLanguage;
      }

      // ------------ Local Management --------------------
      this.currentLocale = nxDateLocale;
      this.nxDateAdapter.localeChanges.subscribe((locale) => {
        this.currentLocale = locale;
      });
      // ------------ End Local Management ----------------

      // if a current lang is set in translate - use that one.
      if (this.userlang !== undefined) {
        translate.use(this.userlang);
        this.nxDateAdapter.setLocale(this.getNxDateLocaleAsString(translate.currentLang));
        appDataStore.userlang = this.userlang;
        this.currentLocale = this.userlang;
      } else {
        // Check if we have a url param language - if not, go for browser.
        if (this.userlang === undefined) {
          if (applicationLanguages.includes(navigatorLanguage)) {
            // No url lang
            bodylang = this.document.documentElement.lang
            translate.use(bodylang);
            this.nxDateAdapter.setLocale(this.getNxDateLocaleAsString(bodylang));
            appDataStore.userlang = bodylang;
            this.currentLocale = bodylang;
          } else {
            translate.use(translate.getDefaultLang());
            this.nxDateAdapter.setLocale(this.getNxDateLocaleAsString(translate.getDefaultLang()));
            appDataStore.userlang = translate.getDefaultLang();
            this.currentLocale = translate.getDefaultLang();
          }
        } else {
          if (applicationLanguages.includes(this.userlang)) {
            // url lang
            translate.use(this.userlang);
            this.nxDateAdapter.setLocale(this.getNxDateLocaleAsString(this.userlang));
            appDataStore.userlang = this.userlang;
            this.currentLocale = this.userlang;
          } else {
            translate.use(translate.getDefaultLang());
            this.nxDateAdapter.setLocale(this.getNxDateLocaleAsString(translate.getDefaultLang()));
            appDataStore.userlang = translate.getDefaultLang();
            this.currentLocale = translate.getDefaultLang();
          }
        }
      }

      setTimeout(() => {
        this.title.setTitle(this.translateService.instant('app.meta.title'));
      }, 1000);

      this.loading = false;
    });
  }

  /**
   * Used to add de-CH language settings to the date validator
   *
   * @param language de / fr / it / en
   */
  private getNxDateLocaleAsString(language: string): string {
    if (language === 'de' || 'fr' || 'it' || 'en') {
      return (language += '-CH');
    }
    return language;
  }

  /**
   * Shows and hides the loading spinner during RouterEvent changes
   * @param event - RouterEvent
   */
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // Reset Flags if return to home
      if (event.url === '/home') {
        // Reset flags or other tasks
      }
    }
  }

  protected readonly environment = environment;
}
