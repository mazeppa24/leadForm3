import * as i1 from '@angular/common/http';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Injectable, InjectionToken, Inject, Optional, NgModule, ElementRef, Renderer2, Directive, Input, Pipe } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

class EmbeddedDataMockService {
    get ContextConfiguration() {
        return undefined;
    }
    get CustomConfiguration() {
        return undefined;
    }
    get I18n() {
        return undefined;
    }
    get Caas() {
        return undefined;
    }
    get Language() {
        return undefined;
    }
    get Country() {
        return undefined;
    }
    get LocaleId() {
        return undefined;
    }
    get InstanceId() {
        return undefined;
    }
    getCaaSConfiguration() {
        return undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockService, decorators: [{
            type: Injectable
        }] });

const aemIntegrationAppServerURLProperty = 'aemIntegrationAppServerURL';

const NORMALIZE_URL_SERVICE_CONFIG_TOKEN = new InjectionToken('NORMALIZE_URL_SERVICE_CONFIG_TOKEN');
class NormalizeUrlService {
    constructor(config, document) {
        this.config = config;
        this.document = document;
        this._config = {
            baseHref: '',
            deployUrl: '',
        };
        // apply only if defined
        if (config) {
            if (config.baseHref) {
                this._config.baseHref = config.baseHref;
            }
            if (config.deployUrl) {
                this._config.deployUrl = config.deployUrl;
            }
        }
        // If no deployURL was configured, check if the loader script automatically determined the deploy URL:
        if ((!this._config || !this._config.deployUrl) && document && document[aemIntegrationAppServerURLProperty]) {
            this._config.deployUrl = document[aemIntegrationAppServerURLProperty];
        }
    }
    /**
     * Taken from angular-cli/packages/@angular/cli/models/webpack-configs/styles.ts
     *
     * @param URL
     */
    normalizeUrl(URL) {
        // Is URL valid?
        if (typeof URL !== 'string' || URL.length < 1) {
            return '';
        }
        // Only convert root relative URLs, which CSS-Loader won't process into require().
        if (!URL.startsWith('/') || URL.startsWith('//')) {
            return URL;
        }
        if (this._config.deployUrl.match(/:\/\//)) {
            // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
            return `${this._config.deployUrl.replace(/\/$/, '')}${URL}`;
        }
        else if (this._config.baseHref.match(/:\/\//)) {
            // If baseHref contains a scheme, include it as is.
            return this._config.baseHref.replace(/\/$/, '') + `/${this._config.deployUrl}/${URL}`.replace(/\/\/+/g, '/');
        }
        else {
            // Join together base-href, deploy-url and the original URL.
            // Also dedupe multiple slashes into single ones.
            return `/${this._config.baseHref}/${this._config.deployUrl}/${URL}`.replace(/\/\/+/g, '/');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlService, deps: [{ token: NORMALIZE_URL_SERVICE_CONFIG_TOKEN, optional: true }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NORMALIZE_URL_SERVICE_CONFIG_TOKEN]
                }, {
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }, {
                    type: Optional
                }] }] });

/* eslint-disable @typescript-eslint/no-explicit-any */
const EMBEDDED_DATA_SERVICE_CONFIG_TOKEN = new InjectionToken('EMBEDDED_DATA_SERVICE_CONFIG_TOKEN');
function getLocaleId(embeddedDataService) {
    return embeddedDataService.LocaleId;
}
class EmbeddedDataService {
    get ContextConfiguration() {
        if (typeof this._contextConfiguration === 'undefined') {
            this._contextConfiguration = this.parseAttribute(this._serviceConfig.ContextConfigurationAttribute);
        }
        return this._contextConfiguration;
    }
    get CustomConfiguration() {
        if (typeof this._customConfiguration === 'undefined') {
            this._customConfiguration = Object.assign({}, this._serviceConfig.DefaultCustomConfiguration, this.parseAttribute(this._serviceConfig.CustomConfigurationAttribute));
        }
        return this._customConfiguration;
    }
    get I18n() {
        if (typeof this._i18n === 'undefined') {
            this._i18n = this.parseAttribute(this._serviceConfig.I18nAttribute);
        }
        return this._i18n;
    }
    get Caas() {
        if (typeof this._caas === 'undefined') {
            this._caas = this.parseAttribute(this._serviceConfig.CaaSAttribute);
        }
        return this._caas;
    }
    get Language() {
        if (this.ContextConfiguration && this.ContextConfiguration.language) {
            return this.ContextConfiguration.language;
        }
        return this._documentLocale && this._documentLocale.language ? this._documentLocale.language : this._serviceConfig.LanguageDefault;
    }
    get Country() {
        if (this.ContextConfiguration && this.ContextConfiguration.country) {
            return this.ContextConfiguration.country;
        }
        return this._documentLocale && this._documentLocale.country ? this._documentLocale.country : this._serviceConfig.CountryDefault;
    }
    get LocaleId() {
        return this.Language + '-' + this.Country;
    }
    get InstanceId() {
        return this.CustomConfiguration.instanceId;
    }
    get embeddedDataServiceConfig() {
        return this._serviceConfig;
    }
    constructor(http, normalizeUrlService, serviceConfig, document) {
        this.http = http;
        this.normalizeUrlService = normalizeUrlService;
        this.serviceConfig = serviceConfig;
        this.document = document;
        this._serviceConfig = {
            rootElementTagName: 'app',
            production: true,
            ContextConfigurationAttribute: 'contextconfiguration',
            CustomConfigurationAttribute: 'customconfiguration',
            I18nAttribute: 'i18n',
            AssetsBasePath: '/assets',
            CaaSAttribute: 'caascontent',
            LanguageDefault: 'en',
            CountryDefault: 'US',
        };
        this.findRootElement(this.document, this.serviceConfig);
        if (document && document.documentElement && document.documentElement.lang) {
            this._documentLocale = parseLocale(document.documentElement.lang);
        }
        if (serviceConfig) {
            Object.assign(this._serviceConfig, serviceConfig);
        }
    }
    findRootElement(_document, serviceConfig) {
        if (serviceConfig && serviceConfig.rootElementTagName) {
            const nativeElement = _document.getElementsByTagName(serviceConfig.rootElementTagName);
            if (nativeElement && nativeElement.length === 1) {
                this._rootElement = nativeElement[0];
                return;
            }
        }
        throw new Error('EmbeddedDataService: Root element of app could not be found!');
    }
    parseAttribute(name) {
        if (!this._rootElement) {
            throw new Error('Embedded data was not initialized!');
        }
        try {
            const attrCont = this._rootElement.getAttribute(name);
            if (attrCont.length > 0) {
                const content = JSON.parse(attrCont);
                if (!isEmpty(content)) {
                    return content;
                }
            }
        }
        catch (e) {
            if (!this._serviceConfig.production) {
                console.log('Error parsing embedded data point: ' + name);
            }
        }
        return;
    }
    /**
     * CaaS resolution logic:
     *    1. If CaaS attribute was received, use that
     *    2. If instanceId in Custom configuration, try instance config
     *    3. try global config
     * @param lang
     */
    getCaaSConfiguration() {
        // 1.
        if (this.Caas) {
            return of(this.Caas);
        }
        let ret = of(null);
        // 2.
        if (this.CustomConfiguration.instanceId) {
            ret = ret.pipe(concatMap(() => {
                return (this.http
                    .get(this.normalizeUrlService.normalizeUrl(`${this._serviceConfig.AssetsBasePath}/${this.CustomConfiguration.instanceId}/config.json`), { withCredentials: true })
                    .pipe(() => of(null)));
            }));
        }
        // 3.
        ret = ret.pipe(concatMap((prev) => {
            if (prev === null) {
                return this.http.get(this.normalizeUrlService.normalizeUrl(`${this._serviceConfig.AssetsBasePath}/config.json`), {
                    withCredentials: true,
                });
            }
            else {
                return of(prev);
            }
        }));
        return ret;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataService, deps: [{ token: i1.HttpClient }, { token: NormalizeUrlService }, { token: EMBEDDED_DATA_SERVICE_CONFIG_TOKEN, optional: true }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: NormalizeUrlService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [EMBEDDED_DATA_SERVICE_CONFIG_TOKEN]
                }, {
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true;
}
// http://userguide.icu-project.org/locale
function parseLocale(locale) {
    if (!locale) {
        return void 0;
    }
    // extract keyword
    const stringLocale = String(locale);
    const keywordPos = stringLocale.indexOf('@');
    const keyword = keywordPos !== -1 ? stringLocale.substr(keywordPos + 1) : void 0;
    const localeWithoutKeyword = keywordPos !== -1 ? stringLocale.substr(0, keywordPos) : stringLocale;
    // en-us => en_us
    const parts = String(localeWithoutKeyword).replace(/-/g, '_').split('_');
    if (!parts.length || parts.length > 4) {
        return void 0;
    }
    const language = parts.shift();
    if (!language) {
        return void 0;
    }
    const retVar = {
        keyword,
        language: language.toLowerCase(),
    };
    if (!parts.length) {
        return retVar;
    }
    if (parts.length === 3) {
        const variant = parts.pop();
        if (variant) {
            retVar.variant = variant.toUpperCase();
        }
    }
    let country = parts.pop();
    if (country.length > 3) {
        retVar.keyword = country;
        country = parts.pop();
    }
    if (country) {
        retVar.country = country.toUpperCase();
    }
    if (!parts.length) {
        return retVar;
    }
    const script = parts.pop();
    if (script) {
        // capitalize it.
        retVar.script = script.substr(0, 1).toUpperCase() + script.substr(1).toLowerCase();
    }
    return retVar;
}

class EmbeddedDataModule {
    static forRoot(serviceConfig) {
        return {
            ngModule: EmbeddedDataModule,
            providers: [
                { provide: EMBEDDED_DATA_SERVICE_CONFIG_TOKEN, useValue: serviceConfig }, //
                EmbeddedDataService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule, providers: [provideHttpClient(withInterceptorsFromDi())] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule, decorators: [{
            type: NgModule,
            args: [{ providers: [provideHttpClient(withInterceptorsFromDi())] }]
        }] });
class EmbeddedDataMockModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule, providers: [{ provide: EmbeddedDataService, useClass: EmbeddedDataMockService }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [{ provide: EmbeddedDataService, useClass: EmbeddedDataMockService }],
                }]
        }] });

class NormalizeUrlDirective {
    set src(val) {
        this._renderer.setAttribute(this._el.nativeElement, 'src', this._normalizeUrlService.normalizeUrl(val));
    }
    constructor(_el, _renderer, _normalizeUrlService) {
        this._el = _el;
        this._renderer = _renderer;
        this._normalizeUrlService = _normalizeUrlService;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlDirective, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: NormalizeUrlService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.1", type: NormalizeUrlDirective, selector: "[aemNormalizeUrl] [src]", inputs: { src: "src" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line
                    selector: '[aemNormalizeUrl] [src]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: NormalizeUrlService, decorators: [{
                    type: Inject,
                    args: [NormalizeUrlService]
                }] }], propDecorators: { src: [{
                type: Input
            }] } });

class NormalizeUrlPipe {
    constructor(normalizeUrlService) {
        this.normalizeUrlService = normalizeUrlService;
    }
    transform(value) {
        return this.normalizeUrlService.normalizeUrl(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlPipe, deps: [{ token: NormalizeUrlService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlPipe, name: "aemNormalizeUrl" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'aemNormalizeUrl',
                }]
        }], ctorParameters: () => [{ type: NormalizeUrlService }] });

class NormalizeUrlModule {
    static forRoot(normalizeUrlServiceConfigProvider) {
        return {
            ngModule: NormalizeUrlModule,
            providers: [normalizeUrlServiceConfigProvider],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule, declarations: [NormalizeUrlDirective, NormalizeUrlPipe], exports: [NormalizeUrlDirective, NormalizeUrlPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NormalizeUrlDirective, NormalizeUrlPipe],
                    exports: [NormalizeUrlDirective, NormalizeUrlPipe],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { EMBEDDED_DATA_SERVICE_CONFIG_TOKEN, EmbeddedDataMockModule, EmbeddedDataModule, EmbeddedDataService, NORMALIZE_URL_SERVICE_CONFIG_TOKEN, NormalizeUrlDirective, NormalizeUrlModule, NormalizeUrlPipe, NormalizeUrlService, getLocaleId };
//# sourceMappingURL=allianz-ngx-aem-integration.mjs.map
