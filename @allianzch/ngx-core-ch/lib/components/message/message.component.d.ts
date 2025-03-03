import { OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service/message-service';
import { ToastType } from './toast-type';
import { Message } from './message.pojo';
import { NotificationType } from './notification-type.enum';
import { NotificationContextType } from './notification-context-type.enum';
import { NotificationMessage } from './notification-message';
import { NxMessageToastService } from '@aposin/ng-aquila/message';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BANNER_CONTEXT } from './banner-context-type.enum';
import * as i0 from "@angular/core";
/**
 * Component that shows modal and non-modal messages
 */
export declare class NgxCoreChMessageComponent implements OnInit, OnDestroy {
    private msgService;
    private messageToastService;
    private router;
    private translateService;
    confirmLabelText: string;
    declineLabelText: string;
    closeLabelText: string;
    showNonModal: boolean;
    nonModalClasses: string[];
    messagesNonModal: Message[];
    notificationTypes: typeof NotificationType;
    notificationType: NotificationType;
    notificationContextType: NotificationContextType;
    notificationMessages: NotificationMessage[];
    private destroyed$;
    constructor(msgService: MessageService, messageToastService: NxMessageToastService, router: Router, translateService: TranslateService);
    ngOnInit(): void;
    /**
     * Removes message from non modal messages list
     * @param arrayPosition - The deleted element's position
     */
    closeNonModalMsg(arrayPosition: number): void;
    closeNotification(arrayPosition: number): void;
    hasMessages(): boolean;
    /**
     * Used to translate the Message types to the NDBX types
     *
     * @param toastType - toast type
     * @returns string
     */
    getNdbxType(toastType?: ToastType): NotificationContextType.info | NotificationContextType.error | NotificationContextType.success | NotificationContextType.warning;
    /**
     * Prep Context
     * @param type - type
     */
    getContext(type: NotificationContextType): BANNER_CONTEXT;
    /**
     * TODO JM: With TypeScript 2.4 we can get rid of stuff like this and use string based enums
     * Converts the toast types (enum values) to their corresponding string values
     * @param toastType - The toast type (it corresponds to the bootstrap alerts type)
     * @returns string- Toast Type as strings (possible values: danger, warning, info, success)
     */
    getToastTypeAsString(toastType: ToastType | undefined): "info" | "success" | "warning" | "danger";
    /**
     * Used to translate the NotificationMessage types to the NxMessageToastContext
     * NxMessageToastContext accepts just info and success as context type. All other types will result in undefined which is similar to
     * regular tpye style https://api-test.allianz.com/ngx-ndbx-dev/documentation/message/api#NxMessageToastContext
     *
     * @param notificationContextType - type
     * @returns string
     */
    getNxMessageToastContext(notificationContextType: NotificationContextType): string | undefined;
    private clearMessages;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCoreChMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCoreChMessageComponent, "ngx-core-ch-app-msg", never, { "confirmLabelText": { "alias": "confirmLabelText"; "required": false; }; "declineLabelText": { "alias": "declineLabelText"; "required": false; }; "closeLabelText": { "alias": "closeLabelText"; "required": false; }; }, {}, never, never, false, never>;
}
