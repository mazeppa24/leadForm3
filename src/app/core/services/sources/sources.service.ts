import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, InjectionToken} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export const SOURCES_PATH = new InjectionToken<string>('SOURCES_PATH')
export const SOURCES_FORM_URL_PROVIDER = new InjectionToken<FormUrlProvider>('FormUrlProvider')

@Injectable()
export class SourcesService {

  private sources: FormSources

  constructor(
    private translationService: TranslateService,
    http: HttpClient,
    @Inject(APP_BASE_HREF) baseUrl: string,
    @Inject(SOURCES_PATH) sourcesPath: string,
    @Inject(SOURCES_FORM_URL_PROVIDER) private formUrlProvider: FormUrlProvider,
  ) {
    http.get<{
      entries: FormSources
    }>(baseUrl + sourcesPath, {responseType: 'json'}).subscribe(sources => this.sources = sources.entries)
    this.sources = {}
  }

  getSource(formName: string, id: string = "default", external_link: string): SourceResult | undefined {
    const currentLang = this.translationService.currentLang
    let source = this.sources[formName][id]
    if (!source.was[currentLang] || !source.woher[currentLang]) return;
    return {
      woher: source.woher[currentLang],
      was: source.was[currentLang],
      url: (external_link.length >0) ? external_link : this.formUrlProvider(source, formName, id),
      source: source.source,
      origin: source.origin,
      category: source.category
    }
  }
}

export type FormUrlProvider = (source: SourceEntry, formName: string, sourceId: string) => string

export const defaultFormUrlProviderFactory = (location: PlatformLocation, translateService: TranslateService): FormUrlProvider => {

  return (source, _formName, _sourceId): string => {
    // if (source.form_url && source.form_url.toString().length > 0) {
    //   console.log('debug defaultFormUrlprovider x', source.form_url)
    //   return source.form_url as string
    // } else if (source.form_url && (source.form_url as Translations)[translateService.currentLang]) {
    //   console.log('debug defaultFormUrlprovider y', (source.form_url as Translations)[translateService.currentLang])
    //   return (source.form_url as Translations)[translateService.currentLang]
    // }
    if (source.form_url && (source.form_url as Translations)[translateService.currentLang]) {
      return (source.form_url as Translations)[translateService.currentLang]
    }
    return location.href
  }
}

interface FormSources {
  [formName: string]: FormSource
}

interface FormSource {
  [sourceId: string]: SourceEntry;
}

interface SourceEntry {
  form_url?: string | Translations;
  woher: Translations
  was: Translations,
  origin: string,
  source: string,
  category: string,
}

interface Translations {
  [languageKey: string]: string
}

export interface SourceResult {
  woher: string
  was: string
  url: string
  origin: string,
  source: string,
  category: string
}


