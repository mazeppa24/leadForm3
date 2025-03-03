import { Component, Input } from '@angular/core';
import { ToastType } from './toast-type';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { NotificationType } from './notification-type.enum';
import { NotificationContextType } from './notification-context-type.enum';
import { NavigationStart } from '@angular/router';
import { BANNER_CONTEXT } from './banner-context-type.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/message-service/message-service";
import * as i2 from "@aposin/ng-aquila/message";
import * as i3 from "@angular/router";
import * as i4 from "@ngx-translate/core";
import * as i5 from "@angular/common";
/**
 * Component that shows modal and non-modal messages
 */
export class NgxCoreChMessageComponent {
    constructor(msgService, messageToastService, router, translateService) {
        this.msgService = msgService;
        this.messageToastService = messageToastService;
        this.router = router;
        this.translateService = translateService;
        this.showNonModal = false;
        this.nonModalClasses = []; // store the ToastType for the messages that are shown in toasts
        this.messagesNonModal = [];
        this.notificationTypes = NotificationType;
        this.notificationMessages = [];
        this.destroyed$ = new ReplaySubject(1);
    }
    ngOnInit() {
        // non modal
        this.msgService.onNonModalError.pipe(takeUntil(this.destroyed$)).subscribe((messagesNonModal) => {
            this.messagesNonModal = messagesNonModal;
            // Check if we have a massege, if yes display, if not, clean up
            if (this.messagesNonModal[0].toastType !== ToastType.cleanup) {
                this.showNonModal = true;
                for (const messageNonModal of messagesNonModal) {
                    this.nonModalClasses.push(this.getToastTypeAsString(messageNonModal.toastType));
                }
            }
            else {
                this.showNonModal = false;
            }
        });
        // notification
        this.msgService.notification.pipe(takeUntil(this.destroyed$)).subscribe((notification) => {
            this.notificationType = notification.notificationType;
            this.notificationMessages = notification.notificationMessages;
            this.notificationContextType = notification.notificationMessages[0].notificationContextType;
            if (this.notificationType === this.notificationTypes.toast) {
                const message = this.translateService.instant(this.notificationMessages[0].message);
                this.messageToastService.open(message, {
                    context: this.getNxMessageToastContext(this.notificationContextType),
                    duration: 5000,
                });
            }
        });
        this.router.events.subscribe((value) => {
            if (value instanceof NavigationStart) {
                this.clearMessages();
            }
        });
    }
    /**
     * Removes message from non modal messages list
     * @param arrayPosition - The deleted element's position
     */
    closeNonModalMsg(arrayPosition) {
        this.messagesNonModal.splice(arrayPosition, 1);
        this.nonModalClasses.splice(arrayPosition, 1);
        if (this.messagesNonModal.length === 0) {
            this.showNonModal = false;
        }
    }
    closeNotification(arrayPosition) {
        this.notificationMessages.splice(arrayPosition, 1);
    }
    hasMessages() {
        return this.notificationMessages.length > 0 && this.notificationType !== NotificationType.toast;
    }
    /**
     * Used to translate the Message types to the NDBX types
     *
     * @param toastType - toast type
     * @returns string
     */
    getNdbxType(toastType) {
        if (toastType) {
            switch (toastType.toString()) {
                case '4':
                    return NotificationContextType.error;
                case '3':
                    return NotificationContextType.warning;
                case '2':
                    return NotificationContextType.info;
                case '5':
                    return NotificationContextType.info;
                default:
                    return NotificationContextType.success;
            }
        }
        else {
            return NotificationContextType.success;
        }
    }
    /**
     * Prep Context
     * @param type - type
     */
    getContext(type) {
        switch (type.toString()) {
            case 'info':
                return BANNER_CONTEXT.info;
            case 'warning':
                return BANNER_CONTEXT.warning;
            case 'error':
                return BANNER_CONTEXT.error;
            default:
                return BANNER_CONTEXT.info;
        }
    }
    /**
     * TODO JM: With TypeScript 2.4 we can get rid of stuff like this and use string based enums
     * Converts the toast types (enum values) to their corresponding string values
     * @param toastType - The toast type (it corresponds to the bootstrap alerts type)
     * @returns string- Toast Type as strings (possible values: danger, warning, info, success)
     */
    getToastTypeAsString(toastType) {
        switch (toastType) {
            case ToastType.danger:
                return 'danger';
            case ToastType.warning:
                return 'warning';
            case ToastType.info:
                return 'info';
            default:
                return 'success';
        }
    }
    /**
     * Used to translate the NotificationMessage types to the NxMessageToastContext
     * NxMessageToastContext accepts just info and success as context type. All other types will result in undefined which is similar to
     * regular tpye style https://api-test.allianz.com/ngx-ndbx-dev/documentation/message/api#NxMessageToastContext
     *
     * @param notificationContextType - type
     * @returns string
     */
    getNxMessageToastContext(notificationContextType) {
        switch (notificationContextType) {
            case NotificationContextType.info:
                return 'info';
            case NotificationContextType.success:
                return 'success';
            default:
                // will result in a regular context type
                return undefined;
        }
    }
    clearMessages() {
        this.messagesNonModal.length = 0;
        this.showNonModal = false;
        this.notificationMessages.length = 0;
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageComponent, deps: [{ token: i1.MessageService }, { token: i2.NxMessageToastService }, { token: i3.Router }, { token: i4.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChMessageComponent, selector: "ngx-core-ch-app-msg", inputs: { confirmLabelText: "confirmLabelText", declineLabelText: "declineLabelText", closeLabelText: "closeLabelText" }, ngImport: i0, template: "<div *ngIf=\"showNonModal\">\n<div *ngFor=\"let messageNonModal of messagesNonModal; let i = index\">\n  <!-- ---------------------------------------------------------------------------------- -->\n  <nx-message [context]=\"getNdbxType(messageNonModal.toastType)\" closable=\"true\" (close)=\"closeNonModalMsg(i)\">{{ messageNonModal.message | translate}}</nx-message>\n  <!-- ---------------------------------------------------------------------------------- -->\n</div>\n</div>\n<div *ngIf=\"hasMessages()\" class=\"nx-margin-s margin-box\">\n  <div *ngFor=\"let notificationMessage of notificationMessages; let i = index\" [ngSwitch]=\"notificationType\">\n    <nx-message *ngSwitchCase=\"notificationTypes.inline\" [context]=\"notificationMessage.notificationContextType\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message *ngSwitchCase=\"notificationTypes.closable\" [context]=\"notificationMessage.notificationContextType\" closable=\"true\" (close)=\"closeNotification(i)\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message-banner *ngSwitchCase=\"notificationTypes.banner\" [context]=\"getContext(notificationMessage.notificationContextType)\" (close)=\"closeNotification(i)\">{{ notificationMessage.message | translate}}</nx-message-banner>\n  </div>\n</div>\n", styles: ["ul{padding:0}ul .az-msg-li{list-style-type:none;text-align:left}.az-msg-close{position:absolute;right:0}\n"], dependencies: [{ kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i5.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: i2.NxMessageComponent, selector: "nx-message", inputs: ["context", "closable", "closeButtonLabel"], outputs: ["close"], exportAs: ["nxMessage"] }, { kind: "component", type: i2.NxMessageBannerComponent, selector: "nx-message-banner", inputs: ["context"], exportAs: ["nxMessageBanner"] }, { kind: "pipe", type: i4.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-app-msg', template: "<div *ngIf=\"showNonModal\">\n<div *ngFor=\"let messageNonModal of messagesNonModal; let i = index\">\n  <!-- ---------------------------------------------------------------------------------- -->\n  <nx-message [context]=\"getNdbxType(messageNonModal.toastType)\" closable=\"true\" (close)=\"closeNonModalMsg(i)\">{{ messageNonModal.message | translate}}</nx-message>\n  <!-- ---------------------------------------------------------------------------------- -->\n</div>\n</div>\n<div *ngIf=\"hasMessages()\" class=\"nx-margin-s margin-box\">\n  <div *ngFor=\"let notificationMessage of notificationMessages; let i = index\" [ngSwitch]=\"notificationType\">\n    <nx-message *ngSwitchCase=\"notificationTypes.inline\" [context]=\"notificationMessage.notificationContextType\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message *ngSwitchCase=\"notificationTypes.closable\" [context]=\"notificationMessage.notificationContextType\" closable=\"true\" (close)=\"closeNotification(i)\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message-banner *ngSwitchCase=\"notificationTypes.banner\" [context]=\"getContext(notificationMessage.notificationContextType)\" (close)=\"closeNotification(i)\">{{ notificationMessage.message | translate}}</nx-message-banner>\n  </div>\n</div>\n", styles: ["ul{padding:0}ul .az-msg-li{list-style-type:none;text-align:left}.az-msg-close{position:absolute;right:0}\n"] }]
        }], ctorParameters: () => [{ type: i1.MessageService }, { type: i2.NxMessageToastService }, { type: i3.Router }, { type: i4.TranslateService }], propDecorators: { confirmLabelText: [{
                type: Input
            }], declineLabelText: [{
                type: Input
            }], closeLabelText: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUkzRSxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBRTVEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHlCQUF5QjtJQWVwQyxZQUNVLFVBQTBCLEVBQzFCLG1CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsZ0JBQWtDO1FBSGxDLGVBQVUsR0FBVixVQUFVLENBQWdCO1FBQzFCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBdUI7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFkNUMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsb0JBQWUs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QUssU0FBUyxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssU0FBUyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssU0FBUyxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCO2dCQUNFLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx3QkFBd0IsQ0FBQyx1QkFBZ0Q7UUFDdkUsUUFBUSx1QkFBdUIsRUFBRTtZQUMvQixLQUFLLHVCQUF1QixDQUFDLElBQUk7Z0JBQy9CLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssdUJBQXVCLENBQUMsT0FBTztnQkFDbEMsT0FBTyxTQUFTLENBQUM7WUFDbkI7Z0JBQ0Usd0NBQXdDO2dCQUN4QyxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDOzhHQXZLVSx5QkFBeUI7a0dBQXpCLHlCQUF5QixxTEN6QnRDLHN5Q0FjQTs7MkZEV2EseUJBQXlCO2tCQVByQyxTQUFTOytCQUVFLHFCQUFxQjsyS0FNdEIsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LXR5cGUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5wb2pvJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblR5cGUgfSBmcm9tICcuL25vdGlmaWNhdGlvbi10eXBlLmVudW0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29udGV4dFR5cGUgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1jb250ZXh0LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25NZXNzYWdlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tbWVzc2FnZSc7XG5pbXBvcnQgeyBOeE1lc3NhZ2VUb2FzdENvbnRleHQsIE54TWVzc2FnZVRvYXN0U2VydmljZSB9IGZyb20gJ0BhcG9zaW4vbmctYXF1aWxhL21lc3NhZ2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQkFOTkVSX0NPTlRFWFQgfSBmcm9tICcuL2Jhbm5lci1jb250ZXh0LXR5cGUuZW51bSc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRoYXQgc2hvd3MgbW9kYWwgYW5kIG5vbi1tb2RhbCBtZXNzYWdlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgLyplc2xpbnQtZGlzYWJsZSAqL1xuICBzZWxlY3RvcjogJ25neC1jb3JlLWNoLWFwcC1tc2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgLyplc2xpbnQtZW5hYmxlICovXG59KVxuZXhwb3J0IGNsYXNzIE5neENvcmVDaE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbmZpcm1MYWJlbFRleHQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlY2xpbmVMYWJlbFRleHQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsb3NlTGFiZWxUZXh0ITogc3RyaW5nO1xuXG4gIHNob3dOb25Nb2RhbCA9IGZhbHNlO1xuICBub25Nb2RhbENsYXNzZXM6IHN0cmluZ1tdID0gW107IC8vIHN0b3JlIHRoZSBUb2FzdFR5cGUgZm9yIHRoZSBtZXNzYWdlcyB0aGF0IGFyZSBzaG93biBpbiB0b2FzdHNcbiAgbWVzc2FnZXNOb25Nb2RhbDogTWVzc2FnZVtdID0gW107XG4gIG5vdGlmaWNhdGlvblR5cGVzOiB0eXBlb2YgTm90aWZpY2F0aW9uVHlwZSA9IE5vdGlmaWNhdGlvblR5cGU7XG4gIG5vdGlmaWNhdGlvblR5cGUhOiBOb3RpZmljYXRpb25UeXBlO1xuICBub3RpZmljYXRpb25Db250ZXh0VHlwZSE6IE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlO1xuICBub3RpZmljYXRpb25NZXNzYWdlczogTm90aWZpY2F0aW9uTWVzc2FnZVtdID0gW107XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtc2dTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VUb2FzdFNlcnZpY2U6IE54TWVzc2FnZVRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIG5vbiBtb2RhbFxuICAgIHRoaXMubXNnU2VydmljZS5vbk5vbk1vZGFsRXJyb3IucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKChtZXNzYWdlc05vbk1vZGFsOiBNZXNzYWdlW10pID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZXNOb25Nb2RhbCA9IG1lc3NhZ2VzTm9uTW9kYWw7XG5cbiAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYSBtYXNzZWdlLCBpZiB5ZXMgZGlzcGxheSwgaWYgbm90LCBjbGVhbiB1cFxuICAgICAgaWYgKHRoaXMubWVzc2FnZXNOb25Nb2RhbFswXS50b2FzdFR5cGUgIT09IFRvYXN0VHlwZS5jbGVhbnVwKSB7XG4gICAgICAgIHRoaXMuc2hvd05vbk1vZGFsID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlTm9uTW9kYWwgb2YgbWVzc2FnZXNOb25Nb2RhbCkge1xuICAgICAgICAgIHRoaXMubm9uTW9kYWxDbGFzc2VzLnB1c2godGhpcy5nZXRUb2FzdFR5cGVBc1N0cmluZyhtZXNzYWdlTm9uTW9kYWwudG9hc3RUeXBlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd05vbk1vZGFsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gbm90aWZpY2F0aW9uXG4gICAgdGhpcy5tc2dTZXJ2aWNlLm5vdGlmaWNhdGlvbi5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblR5cGUgPSBub3RpZmljYXRpb24ubm90aWZpY2F0aW9uVHlwZTtcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uTWVzc2FnZXMgPSBub3RpZmljYXRpb24ubm90aWZpY2F0aW9uTWVzc2FnZXM7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkNvbnRleHRUeXBlID0gbm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbk1lc3NhZ2VzWzBdLm5vdGlmaWNhdGlvbkNvbnRleHRUeXBlO1xuICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uVHlwZSA9PT0gdGhpcy5ub3RpZmljYXRpb25UeXBlcy50b2FzdCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQodGhpcy5ub3RpZmljYXRpb25NZXNzYWdlc1swXS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlVG9hc3RTZXJ2aWNlLm9wZW4obWVzc2FnZSwge1xuICAgICAgICAgIGNvbnRleHQ6IHRoaXMuZ2V0TnhNZXNzYWdlVG9hc3RDb250ZXh0KHRoaXMubm90aWZpY2F0aW9uQ29udGV4dFR5cGUpIGFzIE54TWVzc2FnZVRvYXN0Q29udGV4dCxcbiAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICB0aGlzLmNsZWFyTWVzc2FnZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIG1lc3NhZ2UgZnJvbSBub24gbW9kYWwgbWVzc2FnZXMgbGlzdFxuICAgKiBAcGFyYW0gYXJyYXlQb3NpdGlvbiAtIFRoZSBkZWxldGVkIGVsZW1lbnQncyBwb3NpdGlvblxuICAgKi9cbiAgY2xvc2VOb25Nb2RhbE1zZyhhcnJheVBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICB0aGlzLm1lc3NhZ2VzTm9uTW9kYWwuc3BsaWNlKGFycmF5UG9zaXRpb24sIDEpO1xuICAgIHRoaXMubm9uTW9kYWxDbGFzc2VzLnNwbGljZShhcnJheVBvc2l0aW9uLCAxKTtcbiAgICBpZiAodGhpcy5tZXNzYWdlc05vbk1vZGFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zaG93Tm9uTW9kYWwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU5vdGlmaWNhdGlvbihhcnJheVBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VzLnNwbGljZShhcnJheVBvc2l0aW9uLCAxKTtcbiAgfVxuXG4gIGhhc01lc3NhZ2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgdGhpcy5ub3RpZmljYXRpb25UeXBlICE9PSBOb3RpZmljYXRpb25UeXBlLnRvYXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gdHJhbnNsYXRlIHRoZSBNZXNzYWdlIHR5cGVzIHRvIHRoZSBOREJYIHR5cGVzXG4gICAqXG4gICAqIEBwYXJhbSB0b2FzdFR5cGUgLSB0b2FzdCB0eXBlXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgZ2V0TmRieFR5cGUodG9hc3RUeXBlPzogVG9hc3RUeXBlKSB7XG4gICAgaWYgKHRvYXN0VHlwZSkge1xuICAgICAgc3dpdGNoICh0b2FzdFR5cGUudG9TdHJpbmcoKSkge1xuICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uQ29udGV4dFR5cGUuZXJyb3I7XG4gICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgIHJldHVybiBOb3RpZmljYXRpb25Db250ZXh0VHlwZS53YXJuaW5nO1xuICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uQ29udGV4dFR5cGUuaW5mbztcbiAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlLmluZm87XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlLnN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBOb3RpZmljYXRpb25Db250ZXh0VHlwZS5zdWNjZXNzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwIENvbnRleHRcbiAgICogQHBhcmFtIHR5cGUgLSB0eXBlXG4gICAqL1xuICBnZXRDb250ZXh0KHR5cGU6IE5vdGlmaWNhdGlvbkNvbnRleHRUeXBlKSB7XG4gICAgc3dpdGNoICh0eXBlLnRvU3RyaW5nKCkpIHtcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4gQkFOTkVSX0NPTlRFWFQuaW5mbztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gQkFOTkVSX0NPTlRFWFQud2FybmluZztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgcmV0dXJuIEJBTk5FUl9DT05URVhULmVycm9yO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEJBTk5FUl9DT05URVhULmluZm87XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE8gSk06IFdpdGggVHlwZVNjcmlwdCAyLjQgd2UgY2FuIGdldCByaWQgb2Ygc3R1ZmYgbGlrZSB0aGlzIGFuZCB1c2Ugc3RyaW5nIGJhc2VkIGVudW1zXG4gICAqIENvbnZlcnRzIHRoZSB0b2FzdCB0eXBlcyAoZW51bSB2YWx1ZXMpIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgc3RyaW5nIHZhbHVlc1xuICAgKiBAcGFyYW0gdG9hc3RUeXBlIC0gVGhlIHRvYXN0IHR5cGUgKGl0IGNvcnJlc3BvbmRzIHRvIHRoZSBib290c3RyYXAgYWxlcnRzIHR5cGUpXG4gICAqIEByZXR1cm5zIHN0cmluZy0gVG9hc3QgVHlwZSBhcyBzdHJpbmdzIChwb3NzaWJsZSB2YWx1ZXM6IGRhbmdlciwgd2FybmluZywgaW5mbywgc3VjY2VzcylcbiAgICovXG4gIGdldFRvYXN0VHlwZUFzU3RyaW5nKHRvYXN0VHlwZTogVG9hc3RUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgc3dpdGNoICh0b2FzdFR5cGUpIHtcbiAgICAgIGNhc2UgVG9hc3RUeXBlLmRhbmdlcjpcbiAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgICAgY2FzZSBUb2FzdFR5cGUud2FybmluZzpcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgIGNhc2UgVG9hc3RUeXBlLmluZm86XG4gICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHRyYW5zbGF0ZSB0aGUgTm90aWZpY2F0aW9uTWVzc2FnZSB0eXBlcyB0byB0aGUgTnhNZXNzYWdlVG9hc3RDb250ZXh0XG4gICAqIE54TWVzc2FnZVRvYXN0Q29udGV4dCBhY2NlcHRzIGp1c3QgaW5mbyBhbmQgc3VjY2VzcyBhcyBjb250ZXh0IHR5cGUuIEFsbCBvdGhlciB0eXBlcyB3aWxsIHJlc3VsdCBpbiB1bmRlZmluZWQgd2hpY2ggaXMgc2ltaWxhciB0b1xuICAgKiByZWd1bGFyIHRweWUgc3R5bGUgaHR0cHM6Ly9hcGktdGVzdC5hbGxpYW56LmNvbS9uZ3gtbmRieC1kZXYvZG9jdW1lbnRhdGlvbi9tZXNzYWdlL2FwaSNOeE1lc3NhZ2VUb2FzdENvbnRleHRcbiAgICpcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbkNvbnRleHRUeXBlIC0gdHlwZVxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIGdldE54TWVzc2FnZVRvYXN0Q29udGV4dChub3RpZmljYXRpb25Db250ZXh0VHlwZTogTm90aWZpY2F0aW9uQ29udGV4dFR5cGUpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHN3aXRjaCAobm90aWZpY2F0aW9uQ29udGV4dFR5cGUpIHtcbiAgICAgIGNhc2UgTm90aWZpY2F0aW9uQ29udGV4dFR5cGUuaW5mbzpcbiAgICAgICAgcmV0dXJuICdpbmZvJztcbiAgICAgIGNhc2UgTm90aWZpY2F0aW9uQ29udGV4dFR5cGUuc3VjY2VzczpcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHdpbGwgcmVzdWx0IGluIGEgcmVndWxhciBjb250ZXh0IHR5cGVcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyTWVzc2FnZXMoKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlc05vbk1vZGFsLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zaG93Tm9uTW9kYWwgPSBmYWxzZTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbk1lc3NhZ2VzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cInNob3dOb25Nb2RhbFwiPlxuPGRpdiAqbmdGb3I9XCJsZXQgbWVzc2FnZU5vbk1vZGFsIG9mIG1lc3NhZ2VzTm9uTW9kYWw7IGxldCBpID0gaW5kZXhcIj5cbiAgPCEtLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8bngtbWVzc2FnZSBbY29udGV4dF09XCJnZXROZGJ4VHlwZShtZXNzYWdlTm9uTW9kYWwudG9hc3RUeXBlKVwiIGNsb3NhYmxlPVwidHJ1ZVwiIChjbG9zZSk9XCJjbG9zZU5vbk1vZGFsTXNnKGkpXCI+e3sgbWVzc2FnZU5vbk1vZGFsLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fTwvbngtbWVzc2FnZT5cbiAgPCEtLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJoYXNNZXNzYWdlcygpXCIgY2xhc3M9XCJueC1tYXJnaW4tcyBtYXJnaW4tYm94XCI+XG4gIDxkaXYgKm5nRm9yPVwibGV0IG5vdGlmaWNhdGlvbk1lc3NhZ2Ugb2Ygbm90aWZpY2F0aW9uTWVzc2FnZXM7IGxldCBpID0gaW5kZXhcIiBbbmdTd2l0Y2hdPVwibm90aWZpY2F0aW9uVHlwZVwiPlxuICAgIDxueC1tZXNzYWdlICpuZ1N3aXRjaENhc2U9XCJub3RpZmljYXRpb25UeXBlcy5pbmxpbmVcIiBbY29udGV4dF09XCJub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbkNvbnRleHRUeXBlXCI+e3tub3RpZmljYXRpb25NZXNzYWdlLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fTwvbngtbWVzc2FnZT5cbiAgICA8bngtbWVzc2FnZSAqbmdTd2l0Y2hDYXNlPVwibm90aWZpY2F0aW9uVHlwZXMuY2xvc2FibGVcIiBbY29udGV4dF09XCJub3RpZmljYXRpb25NZXNzYWdlLm5vdGlmaWNhdGlvbkNvbnRleHRUeXBlXCIgY2xvc2FibGU9XCJ0cnVlXCIgKGNsb3NlKT1cImNsb3NlTm90aWZpY2F0aW9uKGkpXCI+e3tub3RpZmljYXRpb25NZXNzYWdlLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fTwvbngtbWVzc2FnZT5cbiAgICA8bngtbWVzc2FnZS1iYW5uZXIgKm5nU3dpdGNoQ2FzZT1cIm5vdGlmaWNhdGlvblR5cGVzLmJhbm5lclwiIFtjb250ZXh0XT1cImdldENvbnRleHQobm90aWZpY2F0aW9uTWVzc2FnZS5ub3RpZmljYXRpb25Db250ZXh0VHlwZSlcIiAoY2xvc2UpPVwiY2xvc2VOb3RpZmljYXRpb24oaSlcIj57eyBub3RpZmljYXRpb25NZXNzYWdlLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fTwvbngtbWVzc2FnZS1iYW5uZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=