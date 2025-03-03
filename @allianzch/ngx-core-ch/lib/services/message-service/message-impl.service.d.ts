import { Injector } from '@angular/core';
import { MessageService } from './message-service';
import { Message } from '../../components/message/message.pojo';
import { Notification } from '../../components/message/notification';
import * as i0 from "@angular/core";
export declare class MessageImplService extends MessageService {
    private injector;
    constructor(injector: Injector);
    /*****************************************************************************************************************/
    /*****************************************************************************************************************/
    /**
     * Emits non-modal messages
     * @param messages - Object that holds the validation/error messages
     */
    handleNonModalError(messages: Message[]): void;
    /**
     * Emits notification
     * @param notification: Notification - Object that holds the notification type and notificationMessages
     */
    handleNotification(notification: Notification): void;
    /**
     * Navigates to error page. A message-service can be passed as routeParams.
     * @param routeTo - The name of the route. For Example '/ErrorPage' (value of [routerLink])
     * @param trackingId - trackingId is used for searching for tracking the errors in the backend
     */
    goToErrorPage(routeTo: string, trackingId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageImplService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageImplService>;
}
