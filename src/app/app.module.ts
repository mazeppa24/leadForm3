import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

// Shared Elements
import {SharedModule} from './modules/shared/shared.module';
import {NX_DATE_LOCALE, NxDatepickerIntl} from '@aposin/ng-aquila/datefield';

// Router
import {AppRoutingModule} from './app-routing.module';

// -------- Application Pages -------------------
// -------- End Application Pages ---------------
// -------- Translation -------------------------
import {MissingTranslationHandler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
// -------- End Translation ---------------------
// -------- Pipes -------------------------------
import {APP_BASE_HREF, registerLocaleData} from '@angular/common';
import localeDeCH from '@angular/common/locales/de-CH';
import localeItCH from '@angular/common/locales/it-CH';
import localeFrCH from '@angular/common/locales/fr-CH';
import localeEnCH from '@angular/common/locales/en-CH';
// -------- End Pipes ---------------------------
// -------- AEM ---------------------------------
import {EmbeddedDataModule, NORMALIZE_URL_SERVICE_CONFIG_TOKEN, NormalizeUrlModule} from '@allianz/ngx-aem-integration';
// -------- End AEM -----------------------------
// -------- App Config --------------------------
import {AppConfigService} from './core/app-config/app-config.service';
import {normalizeUrlConfigFactory} from './core/app-config/normalize-url-config.factory';
// -------- End App Config ----------------------
// -------- Shared Lib --------------------------
import {
  APP_CONFIG_SERVICE_CONFIG_TOKEN,
  LogMissingTranslationHandler,
  NgxCoreChDatepicker,
  NgxCoreChModule,
} from '@allianzch/ngx-core-ch';

import {sharedLibraryConfigFactory} from './core/app-config/shared-library-config.factory';
import {appInitializer} from './app.initializer';
import {AemTranslateLoader} from '@allianz/ngx-aem-integration/ngx-translate-loader';
import {NxDataDisplayModule} from "@aposin/ng-aquila/data-display";
import {WindowPortalComponent} from './window-portal/window-portal.component';
import {SourcesModule} from './core/services/sources/sources.module';
import {environment} from '../environments/environment';
import {NdbxIconModule} from "@allianz/ngx-ndbx/icon";
import {NxIconModule} from "@aposin/ng-aquila/icon";
// -------- End Shared Lib ----------------------
import {NgxTurnstileModule} from "ngx-turnstile";
import {LoadingInterceptor} from "./core/services/loading-service/loading.interceptor";
import {LeadFormHostComponent} from "./lead-form-host/lead-form-host.component";
import {LoadingIndicatorComponent} from "./modules/loading-indicator/loading-indicator.component";

registerLocaleData(localeDeCH);
registerLocaleData(localeItCH);
registerLocaleData(localeFrCH);
registerLocaleData(localeEnCH);

@NgModule({
  declarations: [AppComponent, WindowPortalComponent],
  imports: [
    // -------- Shared Core ---------------------
    NgxCoreChModule.forRoot({
      provide: APP_CONFIG_SERVICE_CONFIG_TOKEN,
      useFactory: sharedLibraryConfigFactory,
      deps: [AppConfigService],
    }),
    // -------- End Shared Core -----------------
    // -------- AEM -----------------------------
    EmbeddedDataModule.forRoot({
      rootElementTagName: 'app-root',
      AssetsBasePath: environment.assetsBasePath,
    }),
    NormalizeUrlModule.forRoot({
      provide: NORMALIZE_URL_SERVICE_CONFIG_TOKEN,
      useFactory: normalizeUrlConfigFactory,
      deps: [AppConfigService],
    }),
    // -------- End AEM -------------------------
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NxIconModule,
    NdbxIconModule,
    // -------- Translation ---------------------
    TranslateModule.forRoot({
        missingTranslationHandler: {
          provide: MissingTranslationHandler,
          useClass: LogMissingTranslationHandler,
          deps: [HttpClient],
        },
        loader: {
          // ---------AEM------------------------
          provide: TranslateLoader,
          useExisting: AemTranslateLoader,
          // ------------------------------------
        },
      }
      // -------- End Translation ---------------
    ),
    NxDataDisplayModule,
    SourcesModule,
    NgxTurnstileModule,
    LeadFormHostComponent,
    LoadingIndicatorComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.baseUrl},
    {provide: NxDatepickerIntl, useClass: NgxCoreChDatepicker},
    {provide: NX_DATE_LOCALE, useValue: 'de'},
    AemTranslateLoader,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    // {
    //     provide: SOURCES_FORM_URL_PROVIDER,
    //     useFactory: formUrlProviderFactory,
    //     deps: [PlatformLocation, TranslateService, ActivatedRoute]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
