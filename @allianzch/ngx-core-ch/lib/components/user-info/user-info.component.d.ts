import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonInterface } from '../../services/user-service/person.interface';
import { CurrentUserService } from '../../services/user-service/current-user.service';
import * as i0 from "@angular/core";
export declare class NgxCoreChUserInfoComponent implements OnInit {
    private currentUserService;
    currentUserId: string;
    currentUser$: Observable<any>;
    currentUser: PersonInterface;
    userRoles: string[];
    constructor(currentUserService: CurrentUserService);
    ngOnInit(): void;
    private getCurrentUser;
    getCurrentUserId(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCoreChUserInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCoreChUserInfoComponent, "ngx-core-ch-user-info", never, { "currentUserId": { "alias": "currentUserId"; "required": false; }; }, {}, never, never, false, never>;
}
