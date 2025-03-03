import { EmbeddedDataService, NormalizeUrlService } from '@allianz/ngx-aem-integration';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AemTranslateLoader implements TranslateLoader {
    private http;
    private normalizeUrlService;
    private embeddedDataService;
    constructor(http: HttpClient, normalizeUrlService: NormalizeUrlService, embeddedDataService: EmbeddedDataService<unknown>);
    /**
     * Translations resolution logic:
     *    1. If i18n attribute was received, use that
     *    2. try global i18n
     * @param lang
     */
    getTranslation(lang: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AemTranslateLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AemTranslateLoader>;
}
