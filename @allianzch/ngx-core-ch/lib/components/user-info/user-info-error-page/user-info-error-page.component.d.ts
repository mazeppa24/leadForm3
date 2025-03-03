import { OnInit } from '@angular/core';
import { UserInfoErrorPageReason } from './user-info-error-page-reason';
import { CurrentUserService } from '../../../services/user-service/current-user.service';
import * as i0 from "@angular/core";
export declare class NgxCoreChUserInfoErrorPageComponent implements OnInit {
    private currentUserService;
    errorPageReason: UserInfoErrorPageReason;
    errorPageTitle: string;
    errorPageText: string;
    errorMessageKey: string;
    constructor(currentUserService: CurrentUserService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCoreChUserInfoErrorPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCoreChUserInfoErrorPageComponent, "ngx-core-ch-user-info-error-page", never, {}, {}, never, never, false, never>;
}
