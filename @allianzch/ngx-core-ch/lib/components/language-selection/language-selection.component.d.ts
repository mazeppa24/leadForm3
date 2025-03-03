import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/**
 * Used to change the language
 */
export declare class NgxCoreChLanguageSelectionComponent implements OnInit {
    private translate;
    listLabel: string;
    languageList: Array<string>;
    showSelection: boolean;
    /**
     * Init the component
     *
     * @param AppDatastore appDataStore - the central data store
     * @param NxDateAdapter<moment.Moment> nxDateAdapter - used to change the local
     * @param string nxDateLocale - used to change the local
     * @param TranslateService translate - the translation
     */
    constructor(translate: TranslateService);
    /**
     * Init the variables
     */
    ngOnInit(): void;
    /**
     * Display / Hide the selection
     */
    displaySelection(): void;
    getCurrentLang(language: string): boolean;
    /**
     * Used to change the translation language from the frontend
     * @param String isoCode
     */
    changeLangByCode(isoCode: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCoreChLanguageSelectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCoreChLanguageSelectionComponent, "ngx-core-ch-language-selection", never, { "listLabel": { "alias": "listLabel"; "required": false; }; }, {}, never, never, false, never>;
}
