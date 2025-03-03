import { NotificationContextType } from './notification-context-type.enum';
export declare class NotificationMessage {
    message: string;
    notificationContextType: NotificationContextType;
    constructor(message: string, notificationContextType: NotificationContextType);
}
