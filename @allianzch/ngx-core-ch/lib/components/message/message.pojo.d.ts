import { ToastType } from './toast-type';
/**
 * Object that stores the message and its severity (= toastType). The message and its severity can be retrieved from backend
 * validation.
 * The toast's style depends on the toast type. The toastType is optional in case no toast is shown.
 */
export declare class Message {
    message: string;
    toastType?: ToastType | undefined;
    constructor(message: string, toastType?: ToastType | undefined);
}
