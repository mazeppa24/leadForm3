import { EventEmitter, Injectable } from '@angular/core';
import { DefaultLangChangeEvent, LangChangeEvent, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

/**
  * The ComponentLocalTranslateService isolates translation context from main TranslateService
  * this means changing the language of this translate service doesn't influence global TranslateService
  * We need that since we want access to global translation store, so that we don't redownload translation
  * files when we would isolate TranslateService from global store.
  * */
@Injectable({
  providedIn: 'root'
})
export class ComponentLocalTranslateService extends TranslateService {

  get onLangChange(): EventEmitter<LangChangeEvent> {
    return new EventEmitter()
  }

  get onTranslationChange(): EventEmitter<TranslationChangeEvent> {
    return new EventEmitter()
  }

  get onDefaultLangChange(): EventEmitter<DefaultLangChangeEvent> {
    return new EventEmitter()
  }

  private _currentLanguage!: string;

  get currentLang() {
    return this._currentLanguage
  }

  set currentLang(currentLanguage) {
    this._currentLanguage = currentLanguage
  }
}
