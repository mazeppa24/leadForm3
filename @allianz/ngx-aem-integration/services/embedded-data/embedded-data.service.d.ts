import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { NormalizeUrlService } from '../normalize-url/normalize-url.service';
import { ContextConfigurationBase } from './context-config-base.interface';
import { CustomConfigurationBase } from './custom-config-base.interface';
import { EmbeddedDataServiceInterface } from './embedded-data.service.model';
import * as i0 from "@angular/core";
export declare const EMBEDDED_DATA_SERVICE_CONFIG_TOKEN: InjectionToken<EmbeddedDataServiceConfig>;
export interface EmbeddedDataServiceConfig {
    /**
     * The tag name of the root element.
     * This is configured, as there is no way to get the element
     * programmatically during the service initialization.
     */
    rootElementTagName: string;
    production?: boolean;
    ContextConfigurationAttribute?: string;
    CustomConfigurationAttribute?: string;
    DefaultCustomConfiguration?: CustomConfigurationBase;
    I18nAttribute?: string;
    AssetsBasePath?: string;
    CaaSAttribute?: string;
    LanguageDefault?: string;
    CountryDefault?: string;
}
export declare function getLocaleId(embeddedDataService: EmbeddedDataService<any, any>): string;
export declare class EmbeddedDataService<CAAS_T, CUSTOM_T extends CustomConfigurationBase = CustomConfigurationBase, CONTEXT_T extends ContextConfigurationBase = ContextConfigurationBase> implements EmbeddedDataServiceInterface<CAAS_T, CUSTOM_T, CONTEXT_T> {
    private http;
    private normalizeUrlService;
    private serviceConfig;
    private document;
    private _rootElement;
    private _documentLocale;
    private _serviceConfig;
    get ContextConfiguration(): CONTEXT_T;
    private _contextConfiguration;
    get CustomConfiguration(): CUSTOM_T;
    private _customConfiguration;
    get I18n(): any;
    private _i18n;
    get Caas(): any;
    private _caas;
    get Language(): string;
    get Country(): string;
    get LocaleId(): string;
    get InstanceId(): string;
    get embeddedDataServiceConfig(): EmbeddedDataServiceConfig;
    constructor(http: HttpClient, normalizeUrlService: NormalizeUrlService, serviceConfig: EmbeddedDataServiceConfig, document: any);
    private findRootElement;
    private parseAttribute;
    /**
     * CaaS resolution logic:
     *    1. If CaaS attribute was received, use that
     *    2. If instanceId in Custom configuration, try instance config
     *    3. try global config
     * @param lang
     */
    getCaaSConfiguration(): Observable<CAAS_T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmbeddedDataService<any, any, any>, [null, null, { optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmbeddedDataService<any, any, any>>;
}
