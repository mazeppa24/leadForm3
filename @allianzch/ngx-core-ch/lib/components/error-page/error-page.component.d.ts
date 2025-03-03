import { AppConfigService } from '../../app-config/app-config.service';
import * as i0 from "@angular/core";
/**
 * Component that shows an error page
 */
export declare class NgxCoreChErrorPageComponent {
    private appConfigService;
    errorPageTitle: string;
    errorPageText: string;
    message: string;
    applicationReloadLabel: string;
    constructor(appConfigService: AppConfigService);
    getWindowLocationOrigin(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCoreChErrorPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCoreChErrorPageComponent, "ngx-core-ch-error-page", never, { "errorPageTitle": { "alias": "errorPageTitle"; "required": false; }; "errorPageText": { "alias": "errorPageText"; "required": false; }; "message": { "alias": "message"; "required": false; }; "applicationReloadLabel": { "alias": "applicationReloadLabel"; "required": false; }; }, {}, never, never, false, never>;
}
