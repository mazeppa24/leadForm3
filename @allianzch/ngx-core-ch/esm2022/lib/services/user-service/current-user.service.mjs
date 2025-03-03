import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserInfoErrorPageReason } from '../../components/user-info/user-info-error-page/user-info-error-page-reason';
import { Notification } from '../../components/message/notification';
import { NotificationType } from '../../components/message/notification-type.enum';
import { NotificationMessage } from '../../components/message/notification-message';
import { NotificationContextType } from '../../components/message/notification-context-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../http-service/http-client-service";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/router";
import * as i4 from "../message-service/message-service";
export class CurrentUserService {
    constructor(httpService, translateService, router, messageService) {
        this.httpService = httpService;
        this.translateService = translateService;
        this.router = router;
        this.messageService = messageService;
    }
    /**
     * Get the User Profile of the current user
     */
    getUserProfile() {
        return this.httpService.get('/acl/userprofile', {}).pipe(retry(2), catchError((error) => this.handleError(error)));
    }
    /**
     * Get the User Roles of the current user
     */
    getUserRoles() {
        return this.httpService.get('/acl/userroles', {}).pipe(retry(2), catchError((error) => this.handleError(error)));
    }
    /**
     * Error Handling
     */
    handleError(error) {
        const errorPagePath = this.getUserInfoErrorPagePath();
        // The backend returned response code zero which indicates the backend is not available
        if (error.status === 0) {
            this.messageKey = 'core.message.errorGeneralBackendNotAvailable';
            this.errorPageReason = UserInfoErrorPageReason.GENERAL_EXCEPTION;
            if (errorPagePath) {
                this.router.navigate([errorPagePath]);
            }
            else {
                this.messageService.handleNotification(new Notification(NotificationType.banner, [new NotificationMessage(this.messageKey, NotificationContextType.error)]));
            }
        }
        else {
            // The backend returned an unsuccessful response code.
            switch (error.status) {
                // Unauthorized
                case 401:
                    this.messageKey = 'core.message.error401';
                    break;
                // No Access
                case 403:
                    this.messageKey = 'core.message.error403';
                    break;
                // Not found
                case 404:
                    this.messageKey = 'core.message.error404';
                    break;
                // Duplicate
                case 409:
                    this.messageKey = 'core.message.error409';
                    break;
                // Internal Server Error
                case 500:
                    this.messageKey = 'core.message.errorGeneral';
                    this.errorPageReason = UserInfoErrorPageReason.GENERAL_EXCEPTION;
                    if (errorPagePath) {
                        this.router.navigate([errorPagePath]);
                        return throwError(error);
                    }
                    break;
                default:
                    this.messageKey = 'core.message.errorGeneral';
                    break;
            }
            this.messageService.handleNotification(new Notification(NotificationType.banner, [new NotificationMessage(this.messageKey, NotificationContextType.warning)]));
        }
        return throwError(error);
    }
    getUserInfoErrorPagePath() {
        let path = '';
        this.router.config.forEach((route) => {
            if (route.component === this.errorPageComponent) {
                path = route.path;
            }
        });
        return path;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CurrentUserService, deps: [{ token: i1.HttpClientService }, { token: i2.TranslateService }, { token: i3.Router }, { token: i4.MessageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CurrentUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CurrentUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClientService }, { type: i2.TranslateService }, { type: i3.Router }, { type: i4.MessageService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9zZXJ2aWNlcy91c2VyLXNlcnZpY2UvY3VycmVudC11c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDdEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7QUFNbEcsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUNVLFdBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ2QsY0FBOEI7UUFIOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUo7O09BRUc7SUFDSSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQWtCLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdkUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FB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QUssQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUMvQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNuQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQS9GVSxrQkFBa0I7a0hBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQZXJzb25JbnRlcmZhY2UgfSBmcm9tICcuL3BlcnNvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlcnJvbGVzSW50ZXJmYWNlIH0gZnJvbSAnLi91c2Vycm9sZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vaHR0cC1zZXJ2aWNlL2h0dHAtY2xpZW50LXNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckluZm9FcnJvclBhZ2VSZWFzb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItaW5mby91c2VyLWluZm8tZXJyb3ItcGFnZS91c2VyLWluZm8tZXJyb3ItcGFnZS1yZWFzb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZXNzYWdlL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZXNzYWdlL25vdGlmaWNhdGlvbi10eXBlLmVudW0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZS9ub3RpZmljYXRpb24tbWVzc2FnZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db250ZXh0VHlwZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZS9ub3RpZmljYXRpb24tY29udGV4dC10eXBlLmVudW0nO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL21lc3NhZ2Utc2VydmljZS9tZXNzYWdlLXNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVudFVzZXJTZXJ2aWNlIHtcbiAgbWVzc2FnZUtleSE6IHN0cmluZztcbiAgZXJyb3JQYWdlUmVhc29uITogVXNlckluZm9FcnJvclBhZ2VSZWFzb247XG4gIGVycm9yUGFnZUNvbXBvbmVudCE6IG9iamVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwQ2xpZW50U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIFVzZXIgUHJvZmlsZSBvZiB0aGUgY3VycmVudCB1c2VyXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlclByb2ZpbGUoKTogT2JzZXJ2YWJsZTxQZXJzb25JbnRlcmZhY2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQ8UGVyc29uSW50ZXJmYWNlPignL2FjbC91c2VycHJvZmlsZScsIHt9KS5waXBlKFxuICAgICAgcmV0cnkoMiksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgVXNlciBSb2xlcyBvZiB0aGUgY3VycmVudCB1c2VyXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IE9ic2VydmFibGU8VXNlcnJvbGVzSW50ZXJmYWNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0PFVzZXJyb2xlc0ludGVyZmFjZT4oJy9hY2wvdXNlcnJvbGVzJywge30pLnBpcGUoXG4gICAgICByZXRyeSgyKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgSGFuZGxpbmdcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKTogT2JzZXJ2YWJsZTxuZXZlcj4ge1xuICAgIGNvbnN0IGVycm9yUGFnZVBhdGggPSB0aGlzLmdldFVzZXJJbmZvRXJyb3JQYWdlUGF0aCgpO1xuICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIHJlc3BvbnNlIGNvZGUgemVybyB3aGljaCBpbmRpY2F0ZXMgdGhlIGJhY2tlbmQgaXMgbm90IGF2YWlsYWJsZVxuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDApIHtcbiAgICAgIHRoaXMubWVzc2FnZUtleSA9ICdjb3JlLm1lc3NhZ2UuZXJyb3JHZW5lcmFsQmFja2VuZE5vdEF2YWlsYWJsZSc7XG4gICAgICB0aGlzLmVycm9yUGFnZVJlYXNvbiA9IFVzZXJJbmZvRXJyb3JQYWdlUmVhc29uLkdFTkVSQUxfRVhDRVBUSU9OO1xuICAgICAgaWYgKGVycm9yUGFnZVBhdGgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2Vycm9yUGFnZVBhdGhdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGFuZGxlTm90aWZpY2F0aW9uKFxuICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uVHlwZS5iYW5uZXIsIFtuZXcgTm90aWZpY2F0aW9uTWVzc2FnZSh0aGlzLm1lc3NhZ2VLZXksIE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlLmVycm9yKV0pLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICAgIC8vIFVuYXV0aG9yaXplZFxuICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VLZXkgPSAnY29yZS5tZXNzYWdlLmVycm9yNDAxJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gTm8gQWNjZXNzXG4gICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgIHRoaXMubWVzc2FnZUtleSA9ICdjb3JlLm1lc3NhZ2UuZXJyb3I0MDMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBOb3QgZm91bmRcbiAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgdGhpcy5tZXNzYWdlS2V5ID0gJ2NvcmUubWVzc2FnZS5lcnJvcjQwNCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIER1cGxpY2F0ZVxuICAgICAgICBjYXNlIDQwOTpcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VLZXkgPSAnY29yZS5tZXNzYWdlLmVycm9yNDA5JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yXG4gICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgIHRoaXMubWVzc2FnZUtleSA9ICdjb3JlLm1lc3NhZ2UuZXJyb3JHZW5lcmFsJztcbiAgICAgICAgICB0aGlzLmVycm9yUGFnZVJlYXNvbiA9IFVzZXJJbmZvRXJyb3JQYWdlUmVhc29uLkdFTkVSQUxfRVhDRVBUSU9OO1xuICAgICAgICAgIGlmIChlcnJvclBhZ2VQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbZXJyb3JQYWdlUGF0aF0pO1xuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VLZXkgPSAnY29yZS5tZXNzYWdlLmVycm9yR2VuZXJhbCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmhhbmRsZU5vdGlmaWNhdGlvbihcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25UeXBlLmJhbm5lciwgW25ldyBOb3RpZmljYXRpb25NZXNzYWdlKHRoaXMubWVzc2FnZUtleSwgTm90aWZpY2F0aW9uQ29udGV4dFR5cGUud2FybmluZyldKSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXNlckluZm9FcnJvclBhZ2VQYXRoKCkge1xuICAgIGxldCBwYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnJztcbiAgICB0aGlzLnJvdXRlci5jb25maWcuZm9yRWFjaCgocm91dGU6IFJvdXRlKSA9PiB7XG4gICAgICBpZiAocm91dGUuY29tcG9uZW50ID09PSB0aGlzLmVycm9yUGFnZUNvbXBvbmVudCkge1xuICAgICAgICBwYXRoID0gcm91dGUucGF0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxufVxuIl19