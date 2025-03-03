import { Component } from '@angular/core';
import { UserInfoErrorPageReason } from './user-info-error-page-reason';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/user-service/current-user.service";
import * as i2 from "../../error-page/error-page.component";
import * as i3 from "@ngx-translate/core";
export class NgxCoreChUserInfoErrorPageComponent {
    constructor(currentUserService) {
        this.currentUserService = currentUserService;
        this.errorPageTitle = '';
        this.errorPageText = '';
        this.errorMessageKey = '';
    }
    ngOnInit() {
        // Get values from user info service
        this.errorPageReason = this.currentUserService.errorPageReason;
        this.errorMessageKey = this.currentUserService.messageKey;
        // Set default values depending on the type
        switch (this.errorPageReason) {
            case UserInfoErrorPageReason.USER_NOT_AUTHORIZED:
                this.errorPageTitle = 'core.title.errorPage';
                this.errorPageText = '';
                break;
            case UserInfoErrorPageReason.GENERAL_EXCEPTION:
                this.errorPageTitle = 'core.title.errorPage';
                this.errorPageText = 'core.text.errorPageInstruction';
                break;
            default:
                this.errorPageTitle = 'core.title.errorPage';
                this.errorPageText = '';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageComponent, deps: [{ token: i1.CurrentUserService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChUserInfoErrorPageComponent, selector: "ngx-core-ch-user-info-error-page", ngImport: i0, template: "<ngx-core-ch-error-page\n  [errorPageTitle]='errorPageTitle | translate'\n  [errorPageText]='errorPageText | translate'\n  [message]='errorMessageKey | translate'\n  [applicationReloadLabel]='\"core.label.reloadApplication\" | translate'>\n</ngx-core-ch-error-page>\n", styles: [""], dependencies: [{ kind: "component", type: i2.NgxCoreChErrorPageComponent, selector: "ngx-core-ch-error-page", inputs: ["errorPageTitle", "errorPageText", "message", "applicationReloadLabel"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-user-info-error-page', template: "<ngx-core-ch-error-page\n  [errorPageTitle]='errorPageTitle | translate'\n  [errorPageText]='errorPageText | translate'\n  [message]='errorMessageKey | translate'\n  [applicationReloadLabel]='\"core.label.reloadApplication\" | translate'>\n</ngx-core-ch-error-page>\n" }]
        }], ctorParameters: () => [{ type: i1.CurrentUserService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLWVycm9yLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWxsaWFuemNoL25neC1jb3JlLWNoL3NyYy9saWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLWVycm9yLXBhZ2UvdXNlci1pbmZvLWVycm9yLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWxsaWFuemNoL25neC1jb3JlLWNoL3NyYy9saWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLWVycm9yLXBhZ2UvdXNlci1pbmZvLWVycm9yLXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFVeEUsTUFBTSxPQUFPLG1DQUFtQztJQU05QyxZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUoxRCxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixvQkFBZSxHQUFXLEVBQUUsQ0FBQztJQUVnQyxDQUFDO0lBRTlELFFBQVE7UUFDTixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDO1FBQy9ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztRQUUxRCwyQ0FBMkM7UUFDM0MsUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzVCLEtBQUssdUJBQXVCLENBQUMsbUJBQW1CO2dCQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLHNCQUFzQixDQUFDO2dCQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsTUFBTTtZQUNSLEtBQUssdUJBQXVCLENBQUMsaUJBQWlCO2dCQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLHNCQUFzQixDQUFDO2dCQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGdDQUFnQyxDQUFDO2dCQUN0RCxNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzhHQTNCVSxtQ0FBbUM7a0dBQW5DLG1DQUFtQyx3RUNYaEQsNlFBTUE7OzJGREthLG1DQUFtQztrQkFQL0MsU0FBUzsrQkFFRSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlckluZm9FcnJvclBhZ2VSZWFzb24gfSBmcm9tICcuL3VzZXItaW5mby1lcnJvci1wYWdlLXJlYXNvbic7XG5pbXBvcnQgeyBDdXJyZW50VXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UvY3VycmVudC11c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLyplc2xpbnQtZGlzYWJsZSAqL1xuICBzZWxlY3RvcjogJ25neC1jb3JlLWNoLXVzZXItaW5mby1lcnJvci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItaW5mby1lcnJvci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXNlci1pbmZvLWVycm9yLXBhZ2UuY29tcG9uZW50LmNzcyddLFxuICAvKmVzbGludC1lbnNhYmxlICovXG59KVxuZXhwb3J0IGNsYXNzIE5neENvcmVDaFVzZXJJbmZvRXJyb3JQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZXJyb3JQYWdlUmVhc29uITogVXNlckluZm9FcnJvclBhZ2VSZWFzb247XG4gIGVycm9yUGFnZVRpdGxlOiBzdHJpbmcgPSAnJztcbiAgZXJyb3JQYWdlVGV4dDogc3RyaW5nID0gJyc7XG4gIGVycm9yTWVzc2FnZUtleTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50VXNlclNlcnZpY2U6IEN1cnJlbnRVc2VyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdXNlciBpbmZvIHNlcnZpY2VcbiAgICB0aGlzLmVycm9yUGFnZVJlYXNvbiA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLmVycm9yUGFnZVJlYXNvbjtcbiAgICB0aGlzLmVycm9yTWVzc2FnZUtleSA9IHRoaXMuY3VycmVudFVzZXJTZXJ2aWNlLm1lc3NhZ2VLZXk7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCB2YWx1ZXMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlXG4gICAgc3dpdGNoICh0aGlzLmVycm9yUGFnZVJlYXNvbikge1xuICAgICAgY2FzZSBVc2VySW5mb0Vycm9yUGFnZVJlYXNvbi5VU0VSX05PVF9BVVRIT1JJWkVEOlxuICAgICAgICB0aGlzLmVycm9yUGFnZVRpdGxlID0gJ2NvcmUudGl0bGUuZXJyb3JQYWdlJztcbiAgICAgICAgdGhpcy5lcnJvclBhZ2VUZXh0ID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVc2VySW5mb0Vycm9yUGFnZVJlYXNvbi5HRU5FUkFMX0VYQ0VQVElPTjpcbiAgICAgICAgdGhpcy5lcnJvclBhZ2VUaXRsZSA9ICdjb3JlLnRpdGxlLmVycm9yUGFnZSc7XG4gICAgICAgIHRoaXMuZXJyb3JQYWdlVGV4dCA9ICdjb3JlLnRleHQuZXJyb3JQYWdlSW5zdHJ1Y3Rpb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZXJyb3JQYWdlVGl0bGUgPSAnY29yZS50aXRsZS5lcnJvclBhZ2UnO1xuICAgICAgICB0aGlzLmVycm9yUGFnZVRleHQgPSAnJztcbiAgICB9XG4gIH1cbn1cbiIsIjxuZ3gtY29yZS1jaC1lcnJvci1wYWdlXG4gIFtlcnJvclBhZ2VUaXRsZV09J2Vycm9yUGFnZVRpdGxlIHwgdHJhbnNsYXRlJ1xuICBbZXJyb3JQYWdlVGV4dF09J2Vycm9yUGFnZVRleHQgfCB0cmFuc2xhdGUnXG4gIFttZXNzYWdlXT0nZXJyb3JNZXNzYWdlS2V5IHwgdHJhbnNsYXRlJ1xuICBbYXBwbGljYXRpb25SZWxvYWRMYWJlbF09J1wiY29yZS5sYWJlbC5yZWxvYWRBcHBsaWNhdGlvblwiIHwgdHJhbnNsYXRlJz5cbjwvbmd4LWNvcmUtY2gtZXJyb3ItcGFnZT5cbiJdfQ==