import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i1 from '@angular/common/http';
import * as i2 from '@allianz/ngx-aem-integration';

class AemTranslateLoader {
    constructor(http, normalizeUrlService, embeddedDataService) {
        this.http = http;
        this.normalizeUrlService = normalizeUrlService;
        this.embeddedDataService = embeddedDataService;
    }
    /**
     * Translations resolution logic:
     *    1. If i18n attribute was received, use that
     *    2. try global i18n
     * @param lang
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTranslation(lang) {
        // 1.
        if (this.embeddedDataService.I18n) {
            return of(this.embeddedDataService.I18n);
        }
        // 2.
        return this.http
            .get(this.normalizeUrlService.normalizeUrl(`${this.embeddedDataService.embeddedDataServiceConfig.AssetsBasePath}/i18n/${lang}.json`), { withCredentials: true })
            .pipe(catchError((err) => {
            if (!this.embeddedDataService.embeddedDataServiceConfig.production) {
                console.log(err);
            }
            return of(null);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: AemTranslateLoader, deps: [{ token: i1.HttpClient }, { token: i2.NormalizeUrlService }, { token: i2.EmbeddedDataService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: AemTranslateLoader, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: AemTranslateLoader, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: i2.NormalizeUrlService }, { type: i2.EmbeddedDataService }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AemTranslateLoader };
//# sourceMappingURL=allianz-ngx-aem-integration-ngx-translate-loader.mjs.map
