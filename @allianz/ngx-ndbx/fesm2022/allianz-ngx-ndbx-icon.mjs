import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import * as i2 from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import * as i1 from '@aposin/ng-aquila/icon';
import { DEFAULT_ICONS, NxIconModule, NX_ICON_INITIALIZER } from '@aposin/ng-aquila/icon';

const SVG_ICONS = {
    // this icon was added directly to the library via https://github.developer.allianz.io/ilt/ngx-ndbx/issues/3690
    // instead of adding it to the official icon font.
    // we leave it here for now and manually add it to the docs that it is not a breaking change
    relation: '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M8,6.1 C8.45882118,6.1 8.83745178,6.44333667 8.89298772,6.88710591 L8.9,7 L8.9,14.1 L15.687,14.1 L13.293,11.707 C12.9320769,11.3460769 12.9043136,10.7798047 13.2097101,10.3872895 L13.293,10.293 C13.684,9.902 14.316,9.902 14.707,10.293 L18.707,14.293 C19.098,14.684 19.098,15.316 18.707,15.707 L14.707,19.707 C14.512,19.902 14.256,20 14,20 C13.744,20 13.488,19.902 13.293,19.707 C12.902,19.316 12.902,18.684 13.293,18.293 L15.685,15.9 L8,15.9 C7.54117882,15.9 7.16254822,15.5566633 7.10701228,15.1128941 L7.1,15 L7.1,7 C7.1,6.50294373 7.50294373,6.1 8,6.1 Z" id="path-1"></path></defs><g id="Expert-new-motor-(Current-UI)" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="NM-Expert-04.1-TP-Damage-Overview-Added" transform="translate(-264.000000, -447.000000)"><g id="Damage-add" transform="translate(256.000000, 288.000000)"><g id="form-/-2.incident-/-Other-parties-involved" transform="translate(0.000000, 52.000000)"><g id="Relation_icon" transform="translate(8.000000, 107.000000)"><rect id="Boundingbox" x="0" y="0" width="24" height="24"></rect><mask id="mask-2" fill="currentColor"><use xlink:href="#path-1"></use></mask><use id="Combined-Shape" fill="currentColor" xlink:href="#path-1"></use></g></g></g></g></g></svg>',
    'exclamation-circle-warning': '<svg height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(-1 -1)"><path d="m23 12c0-6.075-4.924-11-11-11-6.075 0-11 4.925-11 11 0 .38.02.755.057 1.125.376 3.697 2.583 6.854 5.7 8.548.312.169.632.323.962.463.986.417 2.047.695 3.156.807.371.037.746.057 1.125.057.38 0 .755-.02 1.125-.057 1.11-.112 2.17-.39 3.157-.807.33-.14.65-.294.962-.463 3.117-1.694 5.324-4.851 5.7-8.548.037-.37.056-.745.056-1.125z" fill="#efbe25"/><path d="m12.1 15.8c.551 0 1 .45 1 1v.2c0 .55-.449 1-1 1h-.199c-.551 0-1-.45-1-1v-.2c0-.55.449-1 1-1zm.2-9.8c.386 0 .7.315.7.7v6.6c0 .386-.314.7-.7.7h-.599c-.386 0-.701-.314-.701-.7v-6.6c0-.385.315-.7.701-.7z" fill="#414141"/></g></svg>',
};
class NdbxIconModule {
    constructor(registry, sanitizer) {
        registry.registerFont('ndbx-icons', 'ndbx-icon', 'nx-icon--');
        registry.setDefaultFont('ndbx-icons');
        Object.keys(DEFAULT_ICONS).forEach(iconName => registry.addFontIcon(iconName, '', 'ndbx-icons'));
        Object.entries(SVG_ICONS).forEach(([iconName, literal]) => registry.addSvgIconLiteral(iconName, sanitizer.bypassSecurityTrustHtml(literal)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.6", ngImport: i0, type: NdbxIconModule, deps: [{ token: i1.NxIconRegistry }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.6", ngImport: i0, type: NdbxIconModule, imports: [NxIconModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.6", ngImport: i0, type: NdbxIconModule, imports: [NxIconModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.6", ngImport: i0, type: NdbxIconModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NxIconModule],
                    exports: [],
                    providers: [],
                }]
        }], ctorParameters: () => [{ type: i1.NxIconRegistry }, { type: i2.DomSanitizer }] });
function provideNdbxIcons() {
    return {
        provide: NX_ICON_INITIALIZER,
        useFactory: (sanitizer) => (registry) => {
            registry.registerFont('ndbx-icons', 'ndbx-icon', 'nx-icon--');
            registry.setDefaultFont('ndbx-icons');
            Object.keys(DEFAULT_ICONS).forEach(iconName => registry.addFontIcon(iconName, '', 'ndbx-icons'));
            Object.entries(SVG_ICONS).forEach(([iconName, literal]) => registry.addSvgIconLiteral(iconName, sanitizer.bypassSecurityTrustHtml(literal)));
        },
        multi: true,
        deps: [DomSanitizer],
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { NdbxIconModule, provideNdbxIcons };
//# sourceMappingURL=allianz-ngx-ndbx-icon.mjs.map
