import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare const NORMALIZE_URL_SERVICE_CONFIG_TOKEN: InjectionToken<NormalizeUrlServiceConfig>;
export interface NormalizeUrlServiceConfig {
    baseHref?: string;
    deployUrl?: string;
}
export declare class NormalizeUrlService {
    private config;
    private document;
    private _config;
    constructor(config: NormalizeUrlServiceConfig, document: any);
    /**
     * Taken from angular-cli/packages/@angular/cli/models/webpack-configs/styles.ts
     *
     * @param URL
     */
    normalizeUrl(URL: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NormalizeUrlService, [{ optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NormalizeUrlService>;
}
