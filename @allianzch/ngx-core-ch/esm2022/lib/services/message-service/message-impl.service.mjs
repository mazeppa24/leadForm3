import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message-service';
import * as i0 from "@angular/core";
export class MessageImplService extends MessageService {
    constructor(injector) {
        super();
        this.injector = injector;
    }
    /*****************************************************************************************************************/
    /* The following methods are used to show messages/errors manually (no http request involved)                    */
    /*****************************************************************************************************************/
    /**
     * Emits non-modal messages
     * @param messages - Object that holds the validation/error messages
     */
    handleNonModalError(messages) {
        this.onNonModalError.next(messages);
    }
    /**
     * Emits notification
     * @param notification: Notification - Object that holds the notification type and notificationMessages
     */
    handleNotification(notification) {
        this.notification.next(notification);
    }
    /**
     * Navigates to error page. A message-service can be passed as routeParams.
     * @param routeTo - The name of the route. For Example '/ErrorPage' (value of [routerLink])
     * @param trackingId - trackingId is used for searching for tracking the errors in the backend
     */
    goToErrorPage(routeTo, trackingId) {
        this.injector.get(Router).navigate([routeTo, { trackingId: trackingId }]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: MessageImplService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: MessageImplService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: MessageImplService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1pbXBsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UvbWVzc2FnZS1pbXBsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUtuRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBYztJQUNwRCxZQUFvQixRQUFrQjtRQUNwQyxLQUFLLEVBQUUsQ0FBQztRQURVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFFdEMsQ0FBQztJQUVELG1IQUFtSDtJQUNuSCxtSEFBbUg7SUFDbkgsbUhBQW1IO0lBRW5IOzs7T0FHRztJQUNILG1CQUFtQixDQUFDLFFBQW1CO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0IsQ0FBQyxZQUEwQjtRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxPQUFlLEVBQUUsVUFBa0I7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDOzhHQWhDVSxrQkFBa0I7a0hBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UucG9qbyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lc3NhZ2Uvbm90aWZpY2F0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbXBsU2VydmljZSBleHRlbmRzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gc2hvdyBtZXNzYWdlcy9lcnJvcnMgbWFudWFsbHkgKG5vIGh0dHAgcmVxdWVzdCBpbnZvbHZlZCkgICAgICAgICAgICAgICAgICAgICovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogRW1pdHMgbm9uLW1vZGFsIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlcyAtIE9iamVjdCB0aGF0IGhvbGRzIHRoZSB2YWxpZGF0aW9uL2Vycm9yIG1lc3NhZ2VzXG4gICAqL1xuICBoYW5kbGVOb25Nb2RhbEVycm9yKG1lc3NhZ2VzOiBNZXNzYWdlW10pOiB2b2lkIHtcbiAgICB0aGlzLm9uTm9uTW9kYWxFcnJvci5uZXh0KG1lc3NhZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyBub3RpZmljYXRpb25cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uIC0gT2JqZWN0IHRoYXQgaG9sZHMgdGhlIG5vdGlmaWNhdGlvbiB0eXBlIGFuZCBub3RpZmljYXRpb25NZXNzYWdlc1xuICAgKi9cbiAgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5ub3RpZmljYXRpb24ubmV4dChub3RpZmljYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBlcnJvciBwYWdlLiBBIG1lc3NhZ2Utc2VydmljZSBjYW4gYmUgcGFzc2VkIGFzIHJvdXRlUGFyYW1zLlxuICAgKiBAcGFyYW0gcm91dGVUbyAtIFRoZSBuYW1lIG9mIHRoZSByb3V0ZS4gRm9yIEV4YW1wbGUgJy9FcnJvclBhZ2UnICh2YWx1ZSBvZiBbcm91dGVyTGlua10pXG4gICAqIEBwYXJhbSB0cmFja2luZ0lkIC0gdHJhY2tpbmdJZCBpcyB1c2VkIGZvciBzZWFyY2hpbmcgZm9yIHRyYWNraW5nIHRoZSBlcnJvcnMgaW4gdGhlIGJhY2tlbmRcbiAgICovXG4gIGdvVG9FcnJvclBhZ2Uocm91dGVUbzogc3RyaW5nLCB0cmFja2luZ0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLm5hdmlnYXRlKFtyb3V0ZVRvLCB7IHRyYWNraW5nSWQ6IHRyYWNraW5nSWQgfV0pO1xuICB9XG59XG4iXX0=