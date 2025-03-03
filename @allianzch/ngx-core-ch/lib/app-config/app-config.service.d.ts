import { AppConfigServiceConfig } from './app-config-service-config';
import * as i0 from "@angular/core";
export declare class AppConfigService {
    private config;
    private _config;
    constructor(config: AppConfigServiceConfig);
    get environment(): string | undefined;
    get apiServerRoot(): string | undefined;
    get authenticationEndpointUrl(): string | undefined;
    get authenticationCallbackUrl(): string | undefined;
    get baseUrl(): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppConfigService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppConfigService>;
}
