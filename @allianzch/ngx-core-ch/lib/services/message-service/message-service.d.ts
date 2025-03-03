import { Message } from '../../components/message/message.pojo';
import { Subject } from 'rxjs';
import { Notification } from '../../components/message/notification';
/**
 * Service whose methods can emit messages (to show on page, in a modal popup or as a toast) and can route to error page.
 * Backend errors/validation can be automatically handled.
 */
export declare abstract class MessageService {
    onNonModalError: Subject<Message[]>;
    notification: Subject<Notification>;
    protected constructor();
    /*****************************************************************************************************************/
    /*****************************************************************************************************************/
    /**
     * @deprecated use handleNotification(notification: Notification) method instead.
     * Emits non-modal messages
     * @param messages {Message[]} - Object that holds the validation/error messages
     */
    abstract handleNonModalError(messages: Message[]): void;
    /**
     * Emits notification
     * @param notificationMessages: Notification - Object that holds the notification type and notificationMessages
     */
    abstract handleNotification(notification: Notification): void;
    /**
     * Navigates to error page. A message-service can be passed as routeParams.
     * @param routeTo - The name of the route. For Example '/ErrorPage' (value of [routerLink])
     * @param errorMessage - The error message for the error page
     * @param trackingId - when we have an error on the backend it helps backend error tracking
     */
    abstract goToErrorPage(routeTo: string, errorMessage: string, trackingId?: string): void;
}
