import { DomSanitizer } from '@angular/platform-browser';
import { NxIconRegistry } from '@aposin/ng-aquila/icon';
import * as i0 from "@angular/core";
import * as i1 from "@aposin/ng-aquila/icon";
export declare class NdbxIconModule {
    constructor(registry: NxIconRegistry, sanitizer: DomSanitizer);
    static ɵfac: i0.ɵɵFactoryDeclaration<NdbxIconModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NdbxIconModule, never, [typeof i1.NxIconModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NdbxIconModule>;
}
export declare function provideNdbxIcons(): {
    provide: import("@angular/core").InjectionToken<((registry: NxIconRegistry) => void)[]>;
    useFactory: (sanitizer: DomSanitizer) => (registry: NxIconRegistry) => void;
    multi: boolean;
    deps: (typeof DomSanitizer)[];
};
