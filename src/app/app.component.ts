import {Component, computed, CreateEffectOptions, effect, inject, Inject, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NX_DATE_LOCALE, NxDateAdapter} from '@aposin/ng-aquila/datefield';
import {Moment} from 'moment';
import {environment} from '../environments/environment';
import {InitialAppParamsService} from "./core/services/initial-app-params/initial-app-params.service";
import {DEFAULT_LANGUAGE} from "./constants";

/**
 * This is the main component of the application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  private initialAppParamsService = inject(InitialAppParamsService)
  private translateService = inject(TranslateService)

  // Signal that indicates whether the service has completed initialization
  protected isReady = signal<boolean>(false);

  public currentLocale: any = null;


  constructor(
    private nxDateAdapter: NxDateAdapter<Moment>,
    @Inject(NX_DATE_LOCALE) private nxDateLocale: string) {

    // Use effect to wait for the InitialAppParamsService to be initialized
    // Allow signal writes inside the effect
    const effectOptions: CreateEffectOptions = {allowSignalWrites: true};

    this.translateService.use(DEFAULT_LANGUAGE);

    effect(() => {
      if (this.initialAppParamsService.isInitialized() && !this.isReady()) {
        this.isReady.set(true);
        this.initializeAppComponent();
      }
    }, effectOptions);
  }

  private initializeAppComponent() {
    this.currentLocale = this.nxDateLocale;
    this.nxDateAdapter.localeChanges.subscribe((locale) => {
      this.currentLocale = locale;
    });
    this.translateService.use(this.language());
    this.nxDateAdapter.setLocale(this.getNxDateLocaleAsString(this.translateService.currentLang));
  }

  language = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.language ||
      DEFAULT_LANGUAGE,
  );

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

  protected readonly environment = environment;
}
