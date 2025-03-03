import { Observable } from 'rxjs';
import { PersonInterface } from './person.interface';
import { UserrolesInterface } from './userroles.interface';
import { HttpClientService } from '../http-service/http-client-service';
import { UserInfoErrorPageReason } from '../../components/user-info/user-info-error-page/user-info-error-page-reason';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MessageService } from '../message-service/message-service';
import * as i0 from "@angular/core";
export declare class CurrentUserService {
    private httpService;
    private translateService;
    private router;
    private messageService;
    messageKey: string;
    errorPageReason: UserInfoErrorPageReason;
    errorPageComponent: object;
    constructor(httpService: HttpClientService, translateService: TranslateService, router: Router, messageService: MessageService);
    /**
     * Get the User Profile of the current user
     */
    getUserProfile(): Observable<PersonInterface>;
    /**
     * Get the User Roles of the current user
     */
    getUserRoles(): Observable<UserrolesInterface>;
    /**
     * Error Handling
     */
    private handleError;
    private getUserInfoErrorPagePath;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrentUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrentUserService>;
}
