import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/common";
import * as i3 from "@aposin/ng-aquila/context-menu";
import * as i4 from "@aposin/ng-aquila/icon";
import * as i5 from "@aposin/ng-aquila/button";
/**
 * Used to change the language
 */
export class NgxCoreChLanguageSelectionComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChLanguageSelectionComponent, selector: "ngx-core-ch-language-selection", inputs: { listLabel: "listLabel" }, ngImport: i0, template: "<div>\n\n  <ng-container>\n    {{listLabel}}\n  </ng-container>\n\n  <nx-context-menu #menu=\"nxContextMenu\" >\n    <button nxContextMenuItem type='button' (click)=\"changeLangByCode(langEntry)\" *ngFor=\"let langEntry of languageList\">\n      {{langEntry.toUpperCase()}}\n      <nx-icon aria-hidden=\"true\" name=\"check\" size=\"auto\" *ngIf=\"getCurrentLang(langEntry)\"></nx-icon>\n    </button>\n  </nx-context-menu>\n\n  <button\n    nxIconButton=\"tertiary small\"\n    [nxContextMenuTriggerFor]=\"menu\"\n    aria-label=\"Open menu\"\n    type=\"button\"\n    class=\"nx-margin-left-2xs\">\n    <nx-icon aria-hidden=\"true\" name=\"chevron-down-small\" size=\"s\"></nx-icon>\n  </button>\n\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NxContextMenuComponent, selector: "nx-context-menu", outputs: ["closed"], exportAs: ["nxContextMenu"] }, { kind: "component", type: i3.NxContextMenuItemComponent, selector: "[nxContextMenuItem]", inputs: ["disabled", "disableCloseOnSelect"], exportAs: ["nxContextMenuItem"] }, { kind: "directive", type: i3.NxContextMenuTriggerDirective, selector: "[nxContextMenuTriggerFor]", inputs: ["nxContextMenuTriggerFor", "scrollStrategy", "nxContextMenuTriggerData", "nxContextMenuTriggerMode"], outputs: ["contextMenuOpened", "contextMenuClosed"], exportAs: ["nxContextMenuTrigger"] }, { kind: "component", type: i4.NxIconComponent, selector: "nx-icon", inputs: ["name", "outline", "fill", "size", "font"] }, { kind: "component", type: i5.NxIconButtonComponent, selector: "button[nxIconButton]", inputs: ["nxIconButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChLanguageSelectionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-language-selection', template: "<div>\n\n  <ng-container>\n    {{listLabel}}\n  </ng-container>\n\n  <nx-context-menu #menu=\"nxContextMenu\" >\n    <button nxContextMenuItem type='button' (click)=\"changeLangByCode(langEntry)\" *ngFor=\"let langEntry of languageList\">\n      {{langEntry.toUpperCase()}}\n      <nx-icon aria-hidden=\"true\" name=\"check\" size=\"auto\" *ngIf=\"getCurrentLang(langEntry)\"></nx-icon>\n    </button>\n  </nx-context-menu>\n\n  <button\n    nxIconButton=\"tertiary small\"\n    [nxContextMenuTriggerFor]=\"menu\"\n    aria-label=\"Open menu\"\n    type=\"button\"\n    class=\"nx-margin-left-2xs\">\n    <nx-icon aria-hidden=\"true\" name=\"chevron-down-small\" size=\"s\"></nx-icon>\n  </button>\n\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.TranslateService }], propDecorators: { listLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FsbGlhbnpjaC9uZ3gtY29yZS1jaC9zcmMvbGliL2NvbXBvbmVudHMvbGFuZ3VhZ2Utc2VsZWN0aW9uL2xhbmd1YWdlLXNlbGVjdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9jb21wb25lbnRzL2xhbmd1YWdlLXNlbGVjdGlvbi9sYW5ndWFnZS1zZWxlY3Rpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFHekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUNBQW1DO0lBSzlDOzs7Ozs7O09BT0c7SUFDSCxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVYvQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVU0QixDQUFDO0lBRW5EOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQjtRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxPQUFlO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OEdBN0NVLG1DQUFtQztrR0FBbkMsbUNBQW1DLDBHQ2JoRCx1c0JBdUJBOzsyRkRWYSxtQ0FBbUM7a0JBUC9DLFNBQVM7K0JBRUUsZ0NBQWdDO3FGQU1qQyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbi8qKlxuICogVXNlZCB0byBjaGFuZ2UgdGhlIGxhbmd1YWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICAvKmVzbGludC1kaXNhYmxlICovXG4gIHNlbGVjdG9yOiAnbmd4LWNvcmUtY2gtbGFuZ3VhZ2Utc2VsZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhbmd1YWdlLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xhbmd1YWdlLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzJ10sXG4gIC8qZXNsaW50LWVuYWJsZSAqL1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb3JlQ2hMYW5ndWFnZVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpc3RMYWJlbCE6IHN0cmluZztcbiAgbGFuZ3VhZ2VMaXN0ITogQXJyYXk8c3RyaW5nPjtcbiAgc2hvd1NlbGVjdGlvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbml0IHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIEFwcERhdGFzdG9yZSBhcHBEYXRhU3RvcmUgLSB0aGUgY2VudHJhbCBkYXRhIHN0b3JlXG4gICAqIEBwYXJhbSBOeERhdGVBZGFwdGVyPG1vbWVudC5Nb21lbnQ+IG54RGF0ZUFkYXB0ZXIgLSB1c2VkIHRvIGNoYW5nZSB0aGUgbG9jYWxcbiAgICogQHBhcmFtIHN0cmluZyBueERhdGVMb2NhbGUgLSB1c2VkIHRvIGNoYW5nZSB0aGUgbG9jYWxcbiAgICogQHBhcmFtIFRyYW5zbGF0ZVNlcnZpY2UgdHJhbnNsYXRlIC0gdGhlIHRyYW5zbGF0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICAvKipcbiAgICogSW5pdCB0aGUgdmFyaWFibGVzXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpc3RMYWJlbCA9IHRoaXMudHJhbnNsYXRlLmN1cnJlbnRMYW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgdGhpcy5sYW5ndWFnZUxpc3QgPSB0aGlzLnRyYW5zbGF0ZS5nZXRMYW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgLyBIaWRlIHRoZSBzZWxlY3Rpb25cbiAgICovXG4gIGRpc3BsYXlTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zaG93U2VsZWN0aW9uID0gIXRoaXMuc2hvd1NlbGVjdGlvbjtcbiAgfVxuXG4gIGdldEN1cnJlbnRMYW5nKGxhbmd1YWdlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAobGFuZ3VhZ2UudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcudG9VcHBlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBjaGFuZ2UgdGhlIHRyYW5zbGF0aW9uIGxhbmd1YWdlIGZyb20gdGhlIGZyb250ZW5kXG4gICAqIEBwYXJhbSBTdHJpbmcgaXNvQ29kZVxuICAgKi9cbiAgY2hhbmdlTGFuZ0J5Q29kZShpc29Db2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dTZWxlY3Rpb24gPSAhdGhpcy5zaG93U2VsZWN0aW9uO1xuICAgIHRoaXMudHJhbnNsYXRlLnVzZShpc29Db2RlKTtcbiAgfVxufVxuIiwiPGRpdj5cblxuICA8bmctY29udGFpbmVyPlxuICAgIHt7bGlzdExhYmVsfX1cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG54LWNvbnRleHQtbWVudSAjbWVudT1cIm54Q29udGV4dE1lbnVcIiA+XG4gICAgPGJ1dHRvbiBueENvbnRleHRNZW51SXRlbSB0eXBlPSdidXR0b24nIChjbGljayk9XCJjaGFuZ2VMYW5nQnlDb2RlKGxhbmdFbnRyeSlcIiAqbmdGb3I9XCJsZXQgbGFuZ0VudHJ5IG9mIGxhbmd1YWdlTGlzdFwiPlxuICAgICAge3tsYW5nRW50cnkudG9VcHBlckNhc2UoKX19XG4gICAgICA8bngtaWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiBuYW1lPVwiY2hlY2tcIiBzaXplPVwiYXV0b1wiICpuZ0lmPVwiZ2V0Q3VycmVudExhbmcobGFuZ0VudHJ5KVwiPjwvbngtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9ueC1jb250ZXh0LW1lbnU+XG5cbiAgPGJ1dHRvblxuICAgIG54SWNvbkJ1dHRvbj1cInRlcnRpYXJ5IHNtYWxsXCJcbiAgICBbbnhDb250ZXh0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiXG4gICAgYXJpYS1sYWJlbD1cIk9wZW4gbWVudVwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCJueC1tYXJnaW4tbGVmdC0yeHNcIj5cbiAgICA8bngtaWNvbiBhcmlhLWhpZGRlbj1cInRydWVcIiBuYW1lPVwiY2hldnJvbi1kb3duLXNtYWxsXCIgc2l6ZT1cInNcIj48L254LWljb24+XG4gIDwvYnV0dG9uPlxuXG48L2Rpdj5cbiJdfQ==