import {NgModule} from '@angular/core';
import {CommonModule, PlatformLocation} from '@angular/common';
import {
  defaultFormUrlProviderFactory,
  SourcesService,
  SOURCES_FORM_URL_PROVIDER,
  SOURCES_PATH
} from './sources.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SourcesService,
    {provide: SOURCES_PATH, useValue: 'assets/json/sources.json'},
    {
      provide: SOURCES_FORM_URL_PROVIDER,
      useFactory: defaultFormUrlProviderFactory,
      deps: [PlatformLocation, TranslateService, ActivatedRoute]
    }
  ]
})
export class SourcesModule {
}
