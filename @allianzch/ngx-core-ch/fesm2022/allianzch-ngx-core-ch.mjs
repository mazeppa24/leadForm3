import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, Optional, Component, Input, NgModule, Injector } from '@angular/core';
import * as i2 from '@aposin/ng-aquila/copytext';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import * as i3 from '@aposin/ng-aquila/grid';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import * as i4 from '@aposin/ng-aquila/headline';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import * as i4$1 from '@aposin/ng-aquila/icon';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import * as i6 from '@aposin/ng-aquila/link';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import * as i2$1 from '@angular/common';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$2 from '@angular/common/http';
import { HttpClientJsonpModule, HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { NxAccordionModule } from '@aposin/ng-aquila/accordion';
import { NxAutocompleteModule } from '@aposin/ng-aquila/autocomplete';
import { NxBadgeModule } from '@aposin/ng-aquila/badge';
import { NxBreadcrumbModule } from '@aposin/ng-aquila/breadcrumb';
import * as i5 from '@aposin/ng-aquila/button';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';
import { NxCircleToggleModule } from '@aposin/ng-aquila/circle-toggle';
import { NxCodeInputModule } from '@aposin/ng-aquila/code-input';
import { NxComparisonTableModule } from '@aposin/ng-aquila/comparison-table';
import { NxDatefieldModule, NxDatepickerIntl } from '@aposin/ng-aquila/datefield';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxDynamicTableModule } from '@aposin/ng-aquila/dynamic-table';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxIndicatorModule } from '@aposin/ng-aquila/indicator';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxErrorModule, NxLabelModule } from '@aposin/ng-aquila/base';
import { NxListModule } from '@aposin/ng-aquila/list';
import { NxMaskModule } from '@aposin/ng-aquila/mask';
import * as i2$2 from '@aposin/ng-aquila/message';
import { NxMessageModule } from '@aposin/ng-aquila/message';
import { NxMomentDateModule } from '@aposin/ng-aquila/moment-date-adapter';
import { NxNaturalLanguageFormModule } from '@aposin/ng-aquila/natural-language-form';
import { NxNotificationPanelModule } from '@aposin/ng-aquila/notification-panel';
import { NxNumberStepperModule } from '@aposin/ng-aquila/number-stepper';
import { NxPageSearchModule } from '@aposin/ng-aquila/page-search';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxPhoneInputModule } from '@aposin/ng-aquila/phone-input';
import { NxPopoverModule } from '@aposin/ng-aquila/popover';
import { NxProgressbarModule } from '@aposin/ng-aquila/progressbar';
import { NxProgressStepperModule } from '@aposin/ng-aquila/progress-stepper';
import { NxRadioModule } from '@aposin/ng-aquila/radio-button';
import { NxRadioToggleModule } from '@aposin/ng-aquila/radio-toggle';
import { NxRatingModule } from '@aposin/ng-aquila/rating';
import { NxSliderModule } from '@aposin/ng-aquila/slider';
import * as i1$1 from '@aposin/ng-aquila/spinner';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxSwitcherModule } from '@aposin/ng-aquila/switcher';
import { NxTableModule } from '@aposin/ng-aquila/table';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';
import { NxTaglistModule } from '@aposin/ng-aquila/taglist';
import { NxTimefieldModule } from '@aposin/ng-aquila/timefield';
import { NxVideoModule } from '@aposin/ng-aquila/video';
import * as i3$2 from '@angular/router';
import { RouterModule, NavigationStart, Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NxLicencePlateModule } from '@aposin/ng-aquila/licence-plate';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxSignalButtonModule } from '@aposin/ng-aquila/signal-button';
import { NdbxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxActionModule } from '@aposin/ng-aquila/action';
import * as i3$1 from '@aposin/ng-aquila/context-menu';
import { NxContextMenuModule } from '@aposin/ng-aquila/context-menu';
import { NxFileUploaderModule } from '@aposin/ng-aquila/file-uploader';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxMenuModule } from '@aposin/ng-aquila/menu';
import { NxSidebarModule } from '@aposin/ng-aquila/sidebar';
import { NxSidepanelModule } from '@aposin/ng-aquila/sidepanel';
import { NxToolbarModule } from '@aposin/ng-aquila/toolbar';
import { NxTooltipModule } from '@aposin/ng-aquila/tooltip';
import { NxTreeModule } from '@aposin/ng-aquila/tree';
import { NxAvatarModule } from '@aposin/ng-aquila/avatar';
import { NxDataDisplayModule } from '@aposin/ng-aquila/data-display';
import { NxOverlayModule } from '@aposin/ng-aquila/overlay';
import { NxSmallStageModule } from '@aposin/ng-aquila/small-stage';
import { NxSwipebarModule } from '@aposin/ng-aquila/swipebar';
import * as i1 from '@ngx-translate/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { retry, catchError, map, takeUntil } from 'rxjs/operators';
import { Subject, throwError, forkJoin, ReplaySubject } from 'rxjs';

const APP_CONFIG_SERVICE_CONFIG_TOKEN = new InjectionToken('APP_CONFIG_SERVICE_CONFIG_TOKEN');

class AppConfigService {
    constructor(config) {
        this.config = config;
        this._config = {
            environment: '',
            apiServerRoot: '',
            authenticationEndpointUrl: '',
            authenticationCallbackUrl: '',
            baseUrl: '',
        };
        // apply only if defined
        if (config) {
            if (config.environment) {
                this._config.environment = config.environment;
            }
            if (config.apiServerRoot) {
                this._config.apiServerRoot = config.apiServerRoot;
            }
            if (config.authenticationEndpointUrl) {
                this._config.authenticationEndpointUrl = config.authenticationEndpointUrl;
            }
            if (config.authenticationCallbackUrl) {
                this._config.authenticationCallbackUrl = config.authenticationCallbackUrl;
            }
            if (config.baseUrl) {
                this._config.baseUrl = config.baseUrl;
            }
        }
    }
    get environment() {
        return this._config.environment;
    }
    get apiServerRoot() {
        return this._config.apiServerRoot;
    }
    get authenticationEndpointUrl() {
        return this._config.authenticationEndpointUrl;
    }
    get authenticationCallbackUrl() {
        return this._config.authenticationCallbackUrl;
    }
    get baseUrl() {
        return this._config.baseUrl;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: AppConfigService, deps: [{ token: APP_CONFIG_SERVICE_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: AppConfigService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: AppConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_SERVICE_CONFIG_TOKEN]
                }, {
                    type: Optional
                }] }] });

/**
 * Component that shows an error page
 */
class NgxCoreChErrorPageComponent {
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
        this.errorPageTitle = '';
        this.errorPageText = '';
        this.message = '';
        this.applicationReloadLabel = '';
    }
    getWindowLocationOrigin() {
        return window.location.origin + this.appConfigService.baseUrl;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageComponent, deps: [{ token: AppConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChErrorPageComponent, selector: "ngx-core-ch-error-page", inputs: { errorPageTitle: "errorPageTitle", errorPageText: "errorPageText", message: "message", applicationReloadLabel: "applicationReloadLabel" }, ngImport: i0, template: "<div nxLayout=\"grid maxwidth\" class=\"nx-margin-top-l margin-box\">\n  <div nxRow rowJustify=\"center,center,center,center\">\n    <div nxCol=\"1\">\n      <nx-icon name=\"exclamation-triangle\" size=\"l\" class=\"error\"></nx-icon>\n    </div>\n    <div nxCol=\"11\">\n      <h1 nxHeadline=\"subsection-small\">{{errorPageTitle}}</h1>\n      <p nxCopytext=\"large\">{{errorPageText}}</p>\n      <p nxCopytext=\"normal\">{{message}}</p>\n      <nx-link>\n        <a [href]=\"getWindowLocationOrigin()\">{{applicationReloadLabel}}</a>\n      </nx-link>\n    </div>\n  </div>\n</div>\n", styles: [".error{color:var(--message-error-icon-color);float:right}\n"], dependencies: [{ kind: "component", type: i2.NxCopytextComponent, selector: "[nxCopytext]", inputs: ["nxCopytext"] }, { kind: "component", type: i3.NxLayoutComponent, selector: "[nxLayout]", inputs: ["containerQuery", "nxLayout"] }, { kind: "component", type: i3.NxRowComponent, selector: "[nxRow]", inputs: ["class", "nxRow", "rowJustify", "rowAlignContent", "rowAlignItems", "rowWrap"] }, { kind: "component", type: i3.NxColComponent, selector: "[nxCol]", inputs: ["class", "nxCol", "colOffset", "alignSelf", "colOrder"] }, { kind: "component", type: i4.NxHeadlineComponent, selector: "[nxHeadline]", inputs: ["nxHeadline", "size", "negative"] }, { kind: "component", type: i4$1.NxIconComponent, selector: "nx-icon", inputs: ["name", "outline", "fill", "size", "font"] }, { kind: "component", type: i6.NxLinkComponent, selector: "nx-link", inputs: ["nxStyle", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-error-page', template: "<div nxLayout=\"grid maxwidth\" class=\"nx-margin-top-l margin-box\">\n  <div nxRow rowJustify=\"center,center,center,center\">\n    <div nxCol=\"1\">\n      <nx-icon name=\"exclamation-triangle\" size=\"l\" class=\"error\"></nx-icon>\n    </div>\n    <div nxCol=\"11\">\n      <h1 nxHeadline=\"subsection-small\">{{errorPageTitle}}</h1>\n      <p nxCopytext=\"large\">{{errorPageText}}</p>\n      <p nxCopytext=\"normal\">{{message}}</p>\n      <nx-link>\n        <a [href]=\"getWindowLocationOrigin()\">{{applicationReloadLabel}}</a>\n      </nx-link>\n    </div>\n  </div>\n</div>\n", styles: [".error{color:var(--message-error-icon-color);float:right}\n"] }]
        }], ctorParameters: () => [{ type: AppConfigService }], propDecorators: { errorPageTitle: [{
                type: Input
            }], errorPageText: [{
                type: Input
            }], message: [{
                type: Input
            }], applicationReloadLabel: [{
                type: Input
            }] } });

const EXPORTED_MODULES = [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    NxAccordionModule,
    NxActionModule,
    NxAutocompleteModule,
    NxAvatarModule,
    NxBadgeModule,
    NxBreadcrumbModule,
    NxButtonModule,
    NxCardModule,
    NxCheckboxModule,
    NxCircleToggleModule,
    NxCodeInputModule,
    NxComparisonTableModule,
    NxContextMenuModule,
    NxCopytextModule,
    NxDataDisplayModule,
    NxDatefieldModule,
    NxDropdownModule,
    NxDynamicTableModule,
    NxErrorModule,
    NxFileUploaderModule,
    NxFooterModule,
    NxFormfieldModule,
    NxGridModule,
    NxHeaderModule,
    NxHeadlineModule,
    NxIconModule,
    NxImageModule,
    NgOptimizedImage,
    NxIndicatorModule,
    NxInputModule,
    NxLabelModule,
    NxLinkModule,
    NxListModule,
    NxMaskModule,
    NxMenuModule,
    NxMessageModule,
    NxMomentDateModule,
    NxNaturalLanguageFormModule,
    NxNotificationPanelModule,
    NxNumberStepperModule,
    NxOverlayModule,
    NxPageSearchModule,
    NxPaginationModule,
    NxPopoverModule,
    NxProgressbarModule,
    NxProgressStepperModule,
    NxRadioModule,
    NxRadioToggleModule,
    NxRatingModule,
    NxSidebarModule,
    NxSidepanelModule,
    NxSliderModule,
    NxSmallStageModule,
    NxSpinnerModule,
    NxSwitcherModule,
    NxSwipebarModule,
    NxTableModule,
    NxTabsModule,
    NxTaglistModule,
    NxTimefieldModule,
    NxToolbarModule,
    NxTooltipModule,
    NxTreeModule,
    NxVideoModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    TextFieldModule,
    NdbxIconModule,
    NxPhoneInputModule,
    NxLicencePlateModule,
    NxModalModule,
    NxSignalButtonModule,
];
class NdbxSharedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NdbxSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NdbxSharedModule, imports: [BrowserAnimationsModule,
            BrowserModule,
            FormsModule,
            HttpClientJsonpModule,
            HttpClientModule,
            NxAccordionModule,
            NxActionModule,
            NxAutocompleteModule,
            NxAvatarModule,
            NxBadgeModule,
            NxBreadcrumbModule,
            NxButtonModule,
            NxCardModule,
            NxCheckboxModule,
            NxCircleToggleModule,
            NxCodeInputModule,
            NxComparisonTableModule,
            NxContextMenuModule,
            NxCopytextModule,
            NxDataDisplayModule,
            NxDatefieldModule,
            NxDropdownModule,
            NxDynamicTableModule,
            NxErrorModule,
            NxFileUploaderModule,
            NxFooterModule,
            NxFormfieldModule,
            NxGridModule,
            NxHeaderModule,
            NxHeadlineModule,
            NxIconModule,
            NxImageModule,
            NgOptimizedImage,
            NxIndicatorModule,
            NxInputModule,
            NxLabelModule,
            NxLinkModule,
            NxListModule,
            NxMaskModule,
            NxMenuModule,
            NxMessageModule,
            NxMomentDateModule,
            NxNaturalLanguageFormModule,
            NxNotificationPanelModule,
            NxNumberStepperModule,
            NxOverlayModule,
            NxPageSearchModule,
            NxPaginationModule,
            NxPopoverModule,
            NxProgressbarModule,
            NxProgressStepperModule,
            NxRadioModule,
            NxRadioToggleModule,
            NxRatingModule,
            NxSidebarModule,
            NxSidepanelModule,
            NxSliderModule,
            NxSmallStageModule,
            NxSpinnerModule,
            NxSwitcherModule,
            NxSwipebarModule,
            NxTableModule,
            NxTabsModule,
            NxTaglistModule,
            NxTimefieldModule,
            NxToolbarModule,
            NxTooltipModule,
            NxTreeModule,
            NxVideoModule,
            ReactiveFormsModule,
            RouterModule,
            ScrollingModule,
            TextFieldModule,
            NdbxIconModule,
            NxPhoneInputModule,
            NxLicencePlateModule,
            NxModalModule,
            NxSignalButtonModule], exports: [BrowserAnimationsModule,
            BrowserModule,
            FormsModule,
            HttpClientJsonpModule,
            HttpClientModule,
            NxAccordionModule,
            NxActionModule,
            NxAutocompleteModule,
            NxAvatarModule,
            NxBadgeModule,
            NxBreadcrumbModule,
            NxButtonModule,
            NxCardModule,
            NxCheckboxModule,
            NxCircleToggleModule,
            NxCodeInputModule,
            NxComparisonTableModule,
            NxContextMenuModule,
            NxCopytextModule,
            NxDataDisplayModule,
            NxDatefieldModule,
            NxDropdownModule,
            NxDynamicTableModule,
            NxErrorModule,
            NxFileUploaderModule,
            NxFooterModule,
            NxFormfieldModule,
            NxGridModule,
            NxHeaderModule,
            NxHeadlineModule,
            NxIconModule,
            NxImageModule,
            NgOptimizedImage,
            NxIndicatorModule,
            NxInputModule,
            NxLabelModule,
            NxLinkModule,
            NxListModule,
            NxMaskModule,
            NxMenuModule,
            NxMessageModule,
            NxMomentDateModule,
            NxNaturalLanguageFormModule,
            NxNotificationPanelModule,
            NxNumberStepperModule,
            NxOverlayModule,
            NxPageSearchModule,
            NxPaginationModule,
            NxPopoverModule,
            NxProgressbarModule,
            NxProgressStepperModule,
            NxRadioModule,
            NxRadioToggleModule,
            NxRatingModule,
            NxSidebarModule,
            NxSidepanelModule,
            NxSliderModule,
            NxSmallStageModule,
            NxSpinnerModule,
            NxSwitcherModule,
            NxSwipebarModule,
            NxTableModule,
            NxTabsModule,
            NxTaglistModule,
            NxTimefieldModule,
            NxToolbarModule,
            NxTooltipModule,
            NxTreeModule,
            NxVideoModule,
            ReactiveFormsModule,
            RouterModule,
            ScrollingModule,
            TextFieldModule,
            NdbxIconModule,
            NxPhoneInputModule,
            NxLicencePlateModule,
            NxModalModule,
            NxSignalButtonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NdbxSharedModule, imports: [BrowserAnimationsModule,
            BrowserModule,
            FormsModule,
            HttpClientJsonpModule,
            HttpClientModule,
            NxAccordionModule,
            NxActionModule,
            NxAutocompleteModule,
            NxAvatarModule,
            NxBadgeModule,
            NxBreadcrumbModule,
            NxButtonModule,
            NxCardModule,
            NxCheckboxModule,
            NxCircleToggleModule,
            NxCodeInputModule,
            NxComparisonTableModule,
            NxContextMenuModule,
            NxCopytextModule,
            NxDataDisplayModule,
            NxDatefieldModule,
            NxDropdownModule,
            NxDynamicTableModule,
            NxErrorModule,
            NxFileUploaderModule,
            NxFooterModule,
            NxFormfieldModule,
            NxGridModule,
            NxHeaderModule,
            NxHeadlineModule,
            NxIconModule,
            NxImageModule,
            NxIndicatorModule,
            NxInputModule,
            NxLabelModule,
            NxLinkModule,
            NxListModule,
            NxMaskModule,
            NxMenuModule,
            NxMessageModule,
            NxMomentDateModule,
            NxNaturalLanguageFormModule,
            NxNotificationPanelModule,
            NxNumberStepperModule,
            NxOverlayModule,
            NxPageSearchModule,
            NxPaginationModule,
            NxPopoverModule,
            NxProgressbarModule,
            NxProgressStepperModule,
            NxRadioModule,
            NxRadioToggleModule,
            NxRatingModule,
            NxSidebarModule,
            NxSidepanelModule,
            NxSliderModule,
            NxSmallStageModule,
            NxSpinnerModule,
            NxSwitcherModule,
            NxSwipebarModule,
            NxTableModule,
            NxTabsModule,
            NxTaglistModule,
            NxTimefieldModule,
            NxToolbarModule,
            NxTooltipModule,
            NxTreeModule,
            NxVideoModule,
            ReactiveFormsModule,
            RouterModule,
            ScrollingModule,
            TextFieldModule,
            NdbxIconModule,
            NxPhoneInputModule,
            NxLicencePlateModule,
            NxModalModule,
            NxSignalButtonModule,
            BrowserAnimationsModule,
            BrowserModule,
            FormsModule,
            HttpClientJsonpModule,
            HttpClientModule,
            NxAccordionModule,
            NxActionModule,
            NxAutocompleteModule,
            NxAvatarModule,
            NxBadgeModule,
            NxBreadcrumbModule,
            NxButtonModule,
            NxCardModule,
            NxCheckboxModule,
            NxCircleToggleModule,
            NxCodeInputModule,
            NxComparisonTableModule,
            NxContextMenuModule,
            NxCopytextModule,
            NxDataDisplayModule,
            NxDatefieldModule,
            NxDropdownModule,
            NxDynamicTableModule,
            NxErrorModule,
            NxFileUploaderModule,
            NxFooterModule,
            NxFormfieldModule,
            NxGridModule,
            NxHeaderModule,
            NxHeadlineModule,
            NxIconModule,
            NxImageModule,
            NxIndicatorModule,
            NxInputModule,
            NxLabelModule,
            NxLinkModule,
            NxListModule,
            NxMaskModule,
            NxMenuModule,
            NxMessageModule,
            NxMomentDateModule,
            NxNaturalLanguageFormModule,
            NxNotificationPanelModule,
            NxNumberStepperModule,
            NxOverlayModule,
            NxPageSearchModule,
            NxPaginationModule,
            NxPopoverModule,
            NxProgressbarModule,
            NxProgressStepperModule,
            NxRadioModule,
            NxRadioToggleModule,
            NxRatingModule,
            NxSidebarModule,
            NxSidepanelModule,
            NxSliderModule,
            NxSmallStageModule,
            NxSpinnerModule,
            NxSwitcherModule,
            NxSwipebarModule,
            NxTableModule,
            NxTabsModule,
            NxTaglistModule,
            NxTimefieldModule,
            NxToolbarModule,
            NxTooltipModule,
            NxTreeModule,
            NxVideoModule,
            ReactiveFormsModule,
            RouterModule,
            ScrollingModule,
            TextFieldModule,
            NdbxIconModule,
            NxPhoneInputModule,
            NxLicencePlateModule,
            NxModalModule,
            NxSignalButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NdbxSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [...EXPORTED_MODULES],
                    exports: [...EXPORTED_MODULES],
                }]
        }] });

class NgxCoreChErrorPageModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageModule, declarations: [NgxCoreChErrorPageComponent], imports: [CommonModule, NdbxSharedModule], exports: [NgxCoreChErrorPageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageModule, imports: [CommonModule, NdbxSharedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChErrorPageComponent],
                    imports: [CommonModule, NdbxSharedModule],
                    exports: [NgxCoreChErrorPageComponent],
                }]
        }] });

/**
 * Used to change the language
 */
class NgxCoreChLanguageSelectionComponent {
    /**
     * Init the component
     *
     * @param AppDatastore appDataStore - the central data store
     * @param NxDateAdapter<moment.Moment> nxDateAdapter - used to change the local
     * @param string nxDateLocale - used to change the local
     * @param TranslateService translate - the translation
     */
    constructor(translate) {
        this.translate = translate;
        this.showSelection = false;
    }
    /**
     * Init the variables
     */
    ngOnInit() {
        this.listLabel = this.translate.currentLang.toUpperCase();
        this.languageList = this.translate.getLangs();
    }
    /**
     * Display / Hide the selection
     */
    displaySelection() {
        this.showSelection = !this.showSelection;
    }
    getCurrentLang(language) {
        if (language.toUpperCase() === this.translate.currentLang.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Used to change the translation language from the frontend
     * @param String isoCode
     */
    changeLangByCode(isoCode) {
        this.showSelection = !this.showSelection;
        this.translate.use(isoCode);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionComponent, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChLanguageSelectionComponent, selector: "ngx-core-ch-language-selection", inputs: { listLabel: "listLabel" }, ngImport: i0, template: "<div>\n\n  <ng-container>\n    {{listLabel}}\n  </ng-container>\n\n  <nx-context-menu #menu=\"nxContextMenu\" >\n    <button nxContextMenuItem type='button' (click)=\"changeLangByCode(langEntry)\" *ngFor=\"let langEntry of languageList\">\n      {{langEntry.toUpperCase()}}\n      <nx-icon aria-hidden=\"true\" name=\"check\" size=\"auto\" *ngIf=\"getCurrentLang(langEntry)\"></nx-icon>\n    </button>\n  </nx-context-menu>\n\n  <button\n    nxIconButton=\"tertiary small\"\n    [nxContextMenuTriggerFor]=\"menu\"\n    aria-label=\"Open menu\"\n    type=\"button\"\n    class=\"nx-margin-left-2xs\">\n    <nx-icon aria-hidden=\"true\" name=\"chevron-down-small\" size=\"s\"></nx-icon>\n  </button>\n\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$1.NxContextMenuComponent, selector: "nx-context-menu", outputs: ["closed"], exportAs: ["nxContextMenu"] }, { kind: "component", type: i3$1.NxContextMenuItemComponent, selector: "[nxContextMenuItem]", inputs: ["disabled", "disableCloseOnSelect"], exportAs: ["nxContextMenuItem"] }, { kind: "directive", type: i3$1.NxContextMenuTriggerDirective, selector: "[nxContextMenuTriggerFor]", inputs: ["nxContextMenuTriggerFor", "scrollStrategy", "nxContextMenuTriggerData", "nxContextMenuTriggerMode"], outputs: ["contextMenuOpened", "contextMenuClosed"], exportAs: ["nxContextMenuTrigger"] }, { kind: "component", type: i4$1.NxIconComponent, selector: "nx-icon", inputs: ["name", "outline", "fill", "size", "font"] }, { kind: "component", type: i5.NxIconButtonComponent, selector: "button[nxIconButton]", inputs: ["nxIconButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-language-selection', template: "<div>\n\n  <ng-container>\n    {{listLabel}}\n  </ng-container>\n\n  <nx-context-menu #menu=\"nxContextMenu\" >\n    <button nxContextMenuItem type='button' (click)=\"changeLangByCode(langEntry)\" *ngFor=\"let langEntry of languageList\">\n      {{langEntry.toUpperCase()}}\n      <nx-icon aria-hidden=\"true\" name=\"check\" size=\"auto\" *ngIf=\"getCurrentLang(langEntry)\"></nx-icon>\n    </button>\n  </nx-context-menu>\n\n  <button\n    nxIconButton=\"tertiary small\"\n    [nxContextMenuTriggerFor]=\"menu\"\n    aria-label=\"Open menu\"\n    type=\"button\"\n    class=\"nx-margin-left-2xs\">\n    <nx-icon aria-hidden=\"true\" name=\"chevron-down-small\" size=\"s\"></nx-icon>\n  </button>\n\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.TranslateService }], propDecorators: { listLabel: [{
                type: Input
            }] } });

class NgxCoreChLanguageSelectionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionModule, declarations: [NgxCoreChLanguageSelectionComponent], imports: [CommonModule, NxContextMenuModule, NxIconModule, NxButtonModule, NxCopytextModule], exports: [NgxCoreChLanguageSelectionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionModule, imports: [CommonModule, NxContextMenuModule, NxIconModule, NxButtonModule, NxCopytextModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChLanguageSelectionComponent],
                    imports: [CommonModule, NxContextMenuModule, NxIconModule, NxButtonModule, NxCopytextModule],
                    exports: [NgxCoreChLanguageSelectionComponent],
                    bootstrap: [],
                    providers: [],
                }]
        }] });

class NgxCoreChSpinnerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChSpinnerComponent, selector: "ngx-core-ch-spinner", ngImport: i0, template: "<div class=\"loading-overlay\">\n  <nx-spinner size=\"medium\"></nx-spinner>\n</div>\n", styles: [".loading-overlay{position:absolute;background:#f5f5f5;opacity:.3;inset:0;z-index:2000;display:flex;justify-content:center;align-items:center;height:80vh}\n"], dependencies: [{ kind: "component", type: i1$1.NxSpinnerComponent, selector: "nx-spinner", inputs: ["size", "negative"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-spinner', template: "<div class=\"loading-overlay\">\n  <nx-spinner size=\"medium\"></nx-spinner>\n</div>\n", styles: [".loading-overlay{position:absolute;background:#f5f5f5;opacity:.3;inset:0;z-index:2000;display:flex;justify-content:center;align-items:center;height:80vh}\n"] }]
        }] });

class NgxCoreChSpinnerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, declarations: [NgxCoreChSpinnerComponent], imports: [CommonModule, NdbxSharedModule], exports: [NgxCoreChSpinnerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, imports: [CommonModule, NdbxSharedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChSpinnerComponent],
                    imports: [CommonModule, NdbxSharedModule],
                    exports: [NgxCoreChSpinnerComponent],
                    bootstrap: [],
                    providers: [],
                }]
        }] });

/**
 * The reason why the error page has to be shown
 */
var UserInfoErrorPageReason;
(function (UserInfoErrorPageReason) {
    UserInfoErrorPageReason["GENERAL_EXCEPTION"] = "general_exception";
    UserInfoErrorPageReason["USER_NOT_AUTHORIZED"] = "user_not_authorized";
})(UserInfoErrorPageReason || (UserInfoErrorPageReason = {}));

class Notification {
    constructor(notificationType, notificationMessages) {
        this.notificationType = notificationType;
        this.notificationMessages = notificationMessages;
    }
}

var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["inline"] = 0] = "inline";
    NotificationType[NotificationType["closable"] = 1] = "closable";
    NotificationType[NotificationType["banner"] = 2] = "banner";
    NotificationType[NotificationType["toast"] = 3] = "toast";
})(NotificationType || (NotificationType = {}));

class NotificationMessage {
    constructor(message, notificationContextType) {
        this.message = message;
        this.notificationContextType = notificationContextType;
    }
}

var NotificationContextType;
(function (NotificationContextType) {
    NotificationContextType["regular"] = "regular";
    NotificationContextType["info"] = "info";
    NotificationContextType["error"] = "error";
    NotificationContextType["success"] = "success";
    NotificationContextType["warning"] = "warning";
})(NotificationContextType || (NotificationContextType = {}));

class HttpClientService {
}

/**
 * Service whose methods can emit messages (to show on page, in a modal popup or as a toast) and can route to error page.
 * Backend errors/validation can be automatically handled.
 */
class MessageService {
    constructor() {
        this.onNonModalError = new Subject();
        this.notification = new Subject();
    }
}

class CurrentUserService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CurrentUserService, deps: [{ token: HttpClientService }, { token: i1.TranslateService }, { token: i3$2.Router }, { token: MessageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CurrentUserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CurrentUserService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: HttpClientService }, { type: i1.TranslateService }, { type: i3$2.Router }, { type: MessageService }] });

class NgxCoreChUserInfoErrorPageComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageComponent, deps: [{ token: CurrentUserService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChUserInfoErrorPageComponent, selector: "ngx-core-ch-user-info-error-page", ngImport: i0, template: "<ngx-core-ch-error-page\n  [errorPageTitle]='errorPageTitle | translate'\n  [errorPageText]='errorPageText | translate'\n  [message]='errorMessageKey | translate'\n  [applicationReloadLabel]='\"core.label.reloadApplication\" | translate'>\n</ngx-core-ch-error-page>\n", styles: [""], dependencies: [{ kind: "component", type: NgxCoreChErrorPageComponent, selector: "ngx-core-ch-error-page", inputs: ["errorPageTitle", "errorPageText", "message", "applicationReloadLabel"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-user-info-error-page', template: "<ngx-core-ch-error-page\n  [errorPageTitle]='errorPageTitle | translate'\n  [errorPageText]='errorPageText | translate'\n  [message]='errorMessageKey | translate'\n  [applicationReloadLabel]='\"core.label.reloadApplication\" | translate'>\n</ngx-core-ch-error-page>\n" }]
        }], ctorParameters: () => [{ type: CurrentUserService }] });

class NgxCoreChUserInfoErrorPageModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageModule, declarations: [NgxCoreChUserInfoErrorPageComponent], imports: [CommonModule, TranslateModule, NgxCoreChErrorPageModule], exports: [NgxCoreChUserInfoErrorPageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageModule, imports: [CommonModule, TranslateModule, NgxCoreChErrorPageModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoErrorPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChUserInfoErrorPageComponent],
                    imports: [CommonModule, TranslateModule, NgxCoreChErrorPageModule],
                    exports: [NgxCoreChUserInfoErrorPageComponent],
                }]
        }] });

class NgxCoreChUserInfoComponent {
    constructor(currentUserService) {
        this.currentUserService = currentUserService;
    }
    ngOnInit() {
        this.currentUserService.errorPageComponent = NgxCoreChUserInfoErrorPageComponent;
        this.getCurrentUser();
    }
    getCurrentUser() {
        this.currentUser$ = forkJoin([
            this.currentUserService.getUserProfile().pipe(map((currentUser) => {
                this.currentUser = currentUser;
            })),
            this.currentUserService.getUserRoles().pipe(map((userRoles) => {
                this.userRoles = userRoles.userroles;
            })),
        ]);
    }
    getCurrentUserId() {
        return this.currentUserId;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoComponent, deps: [{ token: CurrentUserService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChUserInfoComponent, selector: "ngx-core-ch-user-info", inputs: { currentUserId: "currentUserId" }, ngImport: i0, template: "<div *ngIf=\"(currentUser$ | async); else userId\">\n    <ng-container>\n      {{currentUser.firstname}} {{currentUser.lastname}}\n    </ng-container>\n    <nx-context-menu #menu=\"nxContextMenu\">\n      <p nxContextMenuItem>{{currentUser.bukrsGe}}</p>\n      <p nxContextMenuItem>{{currentUser.ounr}} - {{currentUser.oushortname}}</p>\n      <p nxContextMenuItem *ngIf=\"currentUser.asuvornamegeneralagent\">\n        {{currentUser.asuvornamegeneralagent}} {{currentUser.asunachnamegeneralagent}}\n        - {{currentUser.city}}</p>\n      <p nxContextMenuItem *ngIf=\"currentUser.agencytype\">{{currentUser.agencytype}}</p>\n      <p nxContextMenuItem *ngIf=\"userRoles\">{{userRoles.join(', ')}}</p>\n    </nx-context-menu>\n    <button\n      nxIconButton=\"tertiary small\"\n      [nxContextMenuTriggerFor]=\"menu\"\n      aria-label=\"Open menu\"\n      type=\"button\"\n      class=\"nx-margin-left-2xs\">\n      <nx-icon aria-hidden=\"true\" name=\"chevron-down-small\" size=\"s\"></nx-icon>\n    </button>\n</div>\n<ng-template #userId>{{getCurrentUserId()}}</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3$1.NxContextMenuComponent, selector: "nx-context-menu", outputs: ["closed"], exportAs: ["nxContextMenu"] }, { kind: "component", type: i3$1.NxContextMenuItemComponent, selector: "[nxContextMenuItem]", inputs: ["disabled", "disableCloseOnSelect"], exportAs: ["nxContextMenuItem"] }, { kind: "directive", type: i3$1.NxContextMenuTriggerDirective, selector: "[nxContextMenuTriggerFor]", inputs: ["nxContextMenuTriggerFor", "scrollStrategy", "nxContextMenuTriggerData", "nxContextMenuTriggerMode"], outputs: ["contextMenuOpened", "contextMenuClosed"], exportAs: ["nxContextMenuTrigger"] }, { kind: "component", type: i4$1.NxIconComponent, selector: "nx-icon", inputs: ["name", "outline", "fill", "size", "font"] }, { kind: "component", type: i5.NxIconButtonComponent, selector: "button[nxIconButton]", inputs: ["nxIconButton"] }, { kind: "pipe", type: i2$1.AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-user-info', template: "<div *ngIf=\"(currentUser$ | async); else userId\">\n    <ng-container>\n      {{currentUser.firstname}} {{currentUser.lastname}}\n    </ng-container>\n    <nx-context-menu #menu=\"nxContextMenu\">\n      <p nxContextMenuItem>{{currentUser.bukrsGe}}</p>\n      <p nxContextMenuItem>{{currentUser.ounr}} - {{currentUser.oushortname}}</p>\n      <p nxContextMenuItem *ngIf=\"currentUser.asuvornamegeneralagent\">\n        {{currentUser.asuvornamegeneralagent}} {{currentUser.asunachnamegeneralagent}}\n        - {{currentUser.city}}</p>\n      <p nxContextMenuItem *ngIf=\"currentUser.agencytype\">{{currentUser.agencytype}}</p>\n      <p nxContextMenuItem *ngIf=\"userRoles\">{{userRoles.join(', ')}}</p>\n    </nx-context-menu>\n    <button\n      nxIconButton=\"tertiary small\"\n      [nxContextMenuTriggerFor]=\"menu\"\n      aria-label=\"Open menu\"\n      type=\"button\"\n      class=\"nx-margin-left-2xs\">\n      <nx-icon aria-hidden=\"true\" name=\"chevron-down-small\" size=\"s\"></nx-icon>\n    </button>\n</div>\n<ng-template #userId>{{getCurrentUserId()}}</ng-template>\n" }]
        }], ctorParameters: () => [{ type: CurrentUserService }], propDecorators: { currentUserId: [{
                type: Input
            }] } });

class NgxCoreChUserInfoModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoModule, declarations: [NgxCoreChUserInfoComponent], imports: [CommonModule, NxContextMenuModule, NxIconModule, NxButtonModule, NxCopytextModule], exports: [NgxCoreChUserInfoComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoModule, imports: [CommonModule, NxContextMenuModule, NxIconModule, NxButtonModule, NxCopytextModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChUserInfoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChUserInfoComponent],
                    imports: [CommonModule, NxContextMenuModule, NxIconModule, NxButtonModule, NxCopytextModule],
                    exports: [NgxCoreChUserInfoComponent],
                    providers: [],
                }]
        }] });

/**
 * Possible values for the different toast's types (these values correspond to the differnt bootstrap classes for alerts)
 */
var ToastType;
(function (ToastType) {
    ToastType[ToastType["success"] = 1] = "success";
    ToastType[ToastType["info"] = 2] = "info";
    ToastType[ToastType["warning"] = 3] = "warning";
    ToastType[ToastType["danger"] = 4] = "danger";
    ToastType[ToastType["confirm"] = 5] = "confirm";
    ToastType[ToastType["cleanup"] = 6] = "cleanup";
})(ToastType || (ToastType = {}));

var BANNER_CONTEXT;
(function (BANNER_CONTEXT) {
    BANNER_CONTEXT["info"] = "info";
    BANNER_CONTEXT["error"] = "error";
    BANNER_CONTEXT["warning"] = "warning";
})(BANNER_CONTEXT || (BANNER_CONTEXT = {}));

/**
 * Component that shows modal and non-modal messages
 */
class NgxCoreChMessageComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageComponent, deps: [{ token: MessageService }, { token: i2$2.NxMessageToastService }, { token: i3$2.Router }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChMessageComponent, selector: "ngx-core-ch-app-msg", inputs: { confirmLabelText: "confirmLabelText", declineLabelText: "declineLabelText", closeLabelText: "closeLabelText" }, ngImport: i0, template: "<div *ngIf=\"showNonModal\">\n<div *ngFor=\"let messageNonModal of messagesNonModal; let i = index\">\n  <!-- ---------------------------------------------------------------------------------- -->\n  <nx-message [context]=\"getNdbxType(messageNonModal.toastType)\" closable=\"true\" (close)=\"closeNonModalMsg(i)\">{{ messageNonModal.message | translate}}</nx-message>\n  <!-- ---------------------------------------------------------------------------------- -->\n</div>\n</div>\n<div *ngIf=\"hasMessages()\" class=\"nx-margin-s margin-box\">\n  <div *ngFor=\"let notificationMessage of notificationMessages; let i = index\" [ngSwitch]=\"notificationType\">\n    <nx-message *ngSwitchCase=\"notificationTypes.inline\" [context]=\"notificationMessage.notificationContextType\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message *ngSwitchCase=\"notificationTypes.closable\" [context]=\"notificationMessage.notificationContextType\" closable=\"true\" (close)=\"closeNotification(i)\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message-banner *ngSwitchCase=\"notificationTypes.banner\" [context]=\"getContext(notificationMessage.notificationContextType)\" (close)=\"closeNotification(i)\">{{ notificationMessage.message | translate}}</nx-message-banner>\n  </div>\n</div>\n", styles: ["ul{padding:0}ul .az-msg-li{list-style-type:none;text-align:left}.az-msg-close{position:absolute;right:0}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: i2$2.NxMessageComponent, selector: "nx-message", inputs: ["context", "closable", "closeButtonLabel"], outputs: ["close"], exportAs: ["nxMessage"] }, { kind: "component", type: i2$2.NxMessageBannerComponent, selector: "nx-message-banner", inputs: ["context"], exportAs: ["nxMessageBanner"] }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-app-msg', template: "<div *ngIf=\"showNonModal\">\n<div *ngFor=\"let messageNonModal of messagesNonModal; let i = index\">\n  <!-- ---------------------------------------------------------------------------------- -->\n  <nx-message [context]=\"getNdbxType(messageNonModal.toastType)\" closable=\"true\" (close)=\"closeNonModalMsg(i)\">{{ messageNonModal.message | translate}}</nx-message>\n  <!-- ---------------------------------------------------------------------------------- -->\n</div>\n</div>\n<div *ngIf=\"hasMessages()\" class=\"nx-margin-s margin-box\">\n  <div *ngFor=\"let notificationMessage of notificationMessages; let i = index\" [ngSwitch]=\"notificationType\">\n    <nx-message *ngSwitchCase=\"notificationTypes.inline\" [context]=\"notificationMessage.notificationContextType\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message *ngSwitchCase=\"notificationTypes.closable\" [context]=\"notificationMessage.notificationContextType\" closable=\"true\" (close)=\"closeNotification(i)\">{{notificationMessage.message | translate}}</nx-message>\n    <nx-message-banner *ngSwitchCase=\"notificationTypes.banner\" [context]=\"getContext(notificationMessage.notificationContextType)\" (close)=\"closeNotification(i)\">{{ notificationMessage.message | translate}}</nx-message-banner>\n  </div>\n</div>\n", styles: ["ul{padding:0}ul .az-msg-li{list-style-type:none;text-align:left}.az-msg-close{position:absolute;right:0}\n"] }]
        }], ctorParameters: () => [{ type: MessageService }, { type: i2$2.NxMessageToastService }, { type: i3$2.Router }, { type: i1.TranslateService }], propDecorators: { confirmLabelText: [{
                type: Input
            }], declineLabelText: [{
                type: Input
            }], closeLabelText: [{
                type: Input
            }] } });

class NgxCoreChMessageModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageModule, declarations: [NgxCoreChMessageComponent], imports: [CommonModule, NdbxSharedModule, TranslateModule], exports: [NgxCoreChMessageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageModule, imports: [CommonModule, NdbxSharedModule, TranslateModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChMessageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChMessageComponent],
                    imports: [CommonModule, NdbxSharedModule, TranslateModule],
                    exports: [NgxCoreChMessageComponent],
                }]
        }] });

class NgxCoreComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, imports: [CommonModule, NxIconModule, NxContextMenuModule, NxButtonModule, NxCopytextModule], exports: [NgxCoreChErrorPageModule,
            NgxCoreChSpinnerModule,
            NgxCoreChLanguageSelectionModule,
            NgxCoreChUserInfoModule,
            NgxCoreChUserInfoErrorPageModule,
            NgxCoreChMessageModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, imports: [CommonModule, NxIconModule, NxContextMenuModule, NxButtonModule, NxCopytextModule, NgxCoreChErrorPageModule,
            NgxCoreChSpinnerModule,
            NgxCoreChLanguageSelectionModule,
            NgxCoreChUserInfoModule,
            NgxCoreChUserInfoErrorPageModule,
            NgxCoreChMessageModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NxIconModule, NxContextMenuModule, NxButtonModule, NxCopytextModule],
                    declarations: [],
                    exports: [
                        NgxCoreChErrorPageModule,
                        NgxCoreChSpinnerModule,
                        NgxCoreChLanguageSelectionModule,
                        NgxCoreChUserInfoModule,
                        NgxCoreChUserInfoErrorPageModule,
                        NgxCoreChMessageModule,
                    ],
                    providers: [],
                }]
        }] });

/**
 * Wrapper around built-in Angular HTTP Service
 */
class HttpClientImplService extends HttpClientService {
    constructor(httpClient, appConfigService) {
        super();
        this.httpClient = httpClient;
        this.appConfigService = appConfigService;
    }
    get(url, options) {
        // assemble the Http Options, including header, etc..
        const httpOptions = {
            headers: this.buildHttpHeaders(),
        };
        if (options) {
            if (options.params) {
                // include optionally params if exists
                // TODO: linter fix
                // httpOptions['params'] = options.params;
            }
            if (options.responseType) {
                // TODO: linter fix
                //httpOptions['responseType'] = options.responseType;
            }
        }
        return this.httpClient.get(this.prepareUrlForRequest(url), httpOptions);
    }
    post(url, body, options) {
        return this.httpClient.post(this.prepareUrlForRequest(url), body, { headers: this.buildHttpHeaders() });
    }
    put(url, body, options) {
        return this.httpClient.put(this.prepareUrlForRequest(url), body, { headers: this.buildHttpHeaders() });
    }
    delete(url, options) {
        return this.httpClient.delete(this.prepareUrlForRequest(url), { headers: this.buildHttpHeaders() });
    }
    /**
     * prepares the url by calling
     * - appendApiServerRoot
     * - encodeQueryParams
     * @param url the url to prepare
     * @returns the prepared url
     */
    prepareUrlForRequest(url) {
        const urlWithServerRoot = this.appendApiServerRoot(url);
        if (this.extractQueryParamsFromUrl(url)) {
            const baseUrlWithServerRoot = urlWithServerRoot.substring(0, urlWithServerRoot.indexOf('?'));
            const encodedQueryParams = this.encodeQueryParams(encodeURI(urlWithServerRoot));
            return baseUrlWithServerRoot + '?' + encodedQueryParams;
        }
        return urlWithServerRoot;
    }
    /**
     * @param boolean useLoadingSpinner - Only if this is set to true, we will consider showing a spinner
     * @param string spinnerId - Specifies which spinner is addressed as there could be multiple ones
     * @returns HttpHeaders -If we did not have any order to show a spinner, we just return empty headers
     */
    buildHttpHeaders() {
        return new HttpHeaders();
    }
    /**
     * Encodes the url query params like in address search 'biel/bienne'
     * atm we just encode the slash, because all of the following methods have drawbacks.
     * - encodeURI
     * - encodeURIComponent
     * - URLSearchParams
     * @param url the url to encode
     * @returns the encoded url
     */
    encodeQueryParams(url) {
        let encodedQueryParams = '';
        const extractedQueryParams = this.extractQueryParamsFromUrl(url);
        // url has query params
        if (extractedQueryParams) {
            encodedQueryParams = extractedQueryParams.replace(new RegExp('/', 'g'), '%2F');
        }
        return encodedQueryParams;
    }
    /**
     * extracts the query param string from the given url
     * @param url the given url
     * @returns the query param string or undefined if there are no query params
     */
    extractQueryParamsFromUrl(url) {
        let queryParams;
        if (url.indexOf('?') >= 0) {
            queryParams = url.substring(url.indexOf('?') + 1);
        }
        return queryParams;
    }
    /**
     * If url is relative then the `apiServerRoot` is appended to the url else return the url
     * @param string url - A string containing the URL to which the request is sent.
     * @returns string url's absolute path
     */
    appendApiServerRoot(url) {
        // if url's absolute path is given then just return that url
        if (url && url[0].indexOf('/') === -1) {
            return url;
        }
        return `${this.appConfigService.apiServerRoot}${url}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: HttpClientImplService, deps: [{ token: i1$2.HttpClient }, { token: AppConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: HttpClientImplService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: HttpClientImplService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1$2.HttpClient }, { type: AppConfigService }] });

/**
 * Factory for the http service. Returns a concrete implementation of the {@link HttpClientService} depending on the environment.
 * As this class has dependencies,
 * we have to make sure that these dependencies are met in different factories before providing this service.
 * Because of {@link APP_INITIALIZER} and provisioning of custom interdependent services this topic is quite complex...
 * @param HttpClient httpClient
 * @param AppConfigService appConfigService
 * @returns HttpClientService
 */
function httpServiceFactory(httpClient, appConfigService) {
    return new HttpClientImplService(httpClient, appConfigService);
}

class MessageImplService extends MessageService {
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

/**
 * As this class is necessary for {@link HttpClientService}, we have to make
 * sure to provide it early enough so all dependencies are resolved correctly.
 * We have to take care in this case only because of {@link APP_INITIALIZER} and
 * provisioning of custom interdependent services - quite complex topic!
 * @param Injector injector - We need to avoid cyclic dependencies,
 * so we pass the injector directly and the service can get the {@link Router} from it when necessary
 * @returns MessageService
 */
function messageServiceFactory(injector) {
    return new MessageImplService(injector);
}

/**
 * Factory for the current user service. Returns a concrete implementation of the {@link CurrentUserService} depending on the environment.
 * As this class has dependencies,
 * we have to make sure that these dependencies are met in different factories before providing this service.
 * Because of {@link APP_INITIALIZER} and provisioning of custom interdependent services this topic is quite complex...
 * @param HttpClientService httpClientService
 * @param TranslateService translateService
 * @param Router: router
 * @param MsgService: messageService
 * @returns CurrentUserService
 */
function currentUserServiceFactory(httpClientService, translateService, router, messageService) {
    return new CurrentUserService(httpClientService, translateService, router, messageService);
}

/**
 * Object that stores the message and its severity (= toastType). The message and its severity can be retrieved from backend
 * validation.
 * The toast's style depends on the toast type. The toastType is optional in case no toast is shown.
 */
class Message {
    constructor(message, toastType) {
        this.message = message;
        this.toastType = toastType;
    }
}

/**
 * return the global native browser window object
 * @returns Window
 */
function _window() {
    return window;
}
class WindowRef {
    reload(bool) {
        this.nativeWindow().location.reload(bool);
    }
    get nativeWindow() {
        return _window();
    }
    get navigator() {
        return this.nativeWindow.navigator;
    }
    locationBase() {
        const loc = this.nativeWindow.location;
        return `${loc.protocol}//${loc.host}/`;
    }
    locationHrefBase() {
        const href = this.nativeWindow.location.href;
        if (!href.includes('#')) {
            return href;
        }
        return href.substr(0, href.indexOf('#'));
    }
    navigateToUrl(url) {
        this.nativeWindow.location.href = url;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: WindowRef, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: WindowRef }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: WindowRef, decorators: [{
            type: Injectable
        }] });

class NgxCoreChDatepicker extends NxDatepickerIntl {
    constructor(translateService) {
        super();
        this.translateService = translateService;
        this.setDatePickerLabels('core.datepicker');
    }
    setDatePickerLabels(labelName) {
        this.translateService.stream(labelName).subscribe((result) => {
            this.calendarLabel = result.calendarLabel; /** used by screen readers */
            this.openCalendarLabel = result.openCalendarLabel; /** used by screen readers */
            this.prevMonthLabel = result.prevMonthLabel; /** used by screen readers */
            this.nextMonthLabel = result.nextMonthLabel; /** used by screen readers */
            this.prevYearLabel = result.prevYearLabel; /** used by screen readers */
            this.nextYearLabel = result.nextYearLabel; /** used by screen readers */
            this.prevMultiYearLabel = result.prevMultiYearLabel; /** used by screen readers */
            this.nextMultiYearLabel = result.nextMultiYearLabel; /** used by screen readers */
            this.switchToMonthViewLabel = result.switchToMonthViewLabel;
            this.switchToMultiYearViewLabel = result.switchToMultiYearViewLabel;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChDatepicker, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChDatepicker }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChDatepicker, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.TranslateService }] });

/**
 * Service gets invoked when a translation could not be found. The moment the application got refactored to use
 * synchronous data loading via @link APP_INITIALIZER, we want to know about every translation event that could not
 * get executed successfully. So we inform the backend about the event to persist this information. To avoid backend
 * flooding, we count each of the xhr requests fired for missing translations and stop at some point.
 */
class LogMissingTranslationHandler {
    constructor() {
        this.maxBackendCalls = 5;
        this.backendCallsRemaining = this.maxBackendCalls;
    }
    /**
     * @param params MissingTranslationHandlerParams - Contains information about the untranslatable key and its service.
     * @returns string For now we indicate the missing of a translation just by informing user and logs about it.
     */
    handle(params) {
        if (this.backendCallsRemaining > 0) {
            this.backendCallsRemaining--;
            const body = JSON.stringify({ level: 'warn', message: `Missing translation for key ${params.key}` });
            console.log(body);
        }
        else {
            console.log(`As we did already sent ${this.maxBackendCalls} requests to backend we stop from now on to avoid flooding.`);
        }
        return `${params.key} TRANSLATION_MISSING`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: LogMissingTranslationHandler, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: LogMissingTranslationHandler }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: LogMissingTranslationHandler, decorators: [{
            type: Injectable
        }] });

class NgxCoreChModule {
    static forRoot(appConfigProvider) {
        return {
            ngModule: NgxCoreChModule,
            providers: [
                // App Config Service
                appConfigProvider,
                // Message Service
                {
                    provide: MessageService,
                    useFactory: messageServiceFactory,
                    deps: [Injector],
                },
                // HTTP Service
                {
                    provide: HttpClientService,
                    useFactory: httpServiceFactory,
                    deps: [HttpClient, AppConfigService],
                },
                WindowRef,
                NgxCoreChDatepicker,
                AppConfigService,
                {
                    provide: CurrentUserService,
                    useFactory: currentUserServiceFactory,
                    deps: [HttpClientService, TranslateService, Router, MessageService],
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, imports: [HttpClientModule, NgxCoreComponentsModule], exports: [NgxCoreComponentsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, imports: [HttpClientModule, NgxCoreComponentsModule, NgxCoreComponentsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [HttpClientModule, NgxCoreComponentsModule],
                    exports: [NgxCoreComponentsModule],
                }]
        }] });

/*
 * Public API Surface of ngx-core-ch
 */

/**
 * Generated bundle index. Do not edit.
 */

export { APP_CONFIG_SERVICE_CONFIG_TOKEN, AppConfigService, CurrentUserService, HttpClientImplService, HttpClientService, LogMissingTranslationHandler, Message, MessageImplService, MessageService, NdbxSharedModule, NgxCoreChDatepicker, NgxCoreChErrorPageComponent, NgxCoreChErrorPageModule, NgxCoreChLanguageSelectionComponent, NgxCoreChLanguageSelectionModule, NgxCoreChMessageComponent, NgxCoreChMessageModule, NgxCoreChModule, NgxCoreChSpinnerComponent, NgxCoreChSpinnerModule, NgxCoreChUserInfoComponent, NgxCoreChUserInfoErrorPageComponent, NgxCoreChUserInfoErrorPageModule, NgxCoreChUserInfoModule, NgxCoreComponentsModule, Notification, NotificationContextType, NotificationMessage, NotificationType, ToastType, WindowRef, currentUserServiceFactory, httpServiceFactory, messageServiceFactory };
//# sourceMappingURL=allianzch-ngx-core-ch.mjs.map
