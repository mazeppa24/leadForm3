import { NotificationType } from './notification-type.enum';
import { NotificationMessage } from './notification-message';
export declare class Notification {
    notificationType: NotificationType;
    notificationMessages: NotificationMessage[];
    constructor(notificationType: NotificationType, notificationMessages: NotificationMessage[]);
}
