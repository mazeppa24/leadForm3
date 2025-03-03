import * as i0 from "@angular/core";
export declare class WindowRef {
    reload(bool: boolean): void;
    get nativeWindow(): any;
    get navigator(): Navigator;
    locationBase(): string;
    locationHrefBase(): string;
    navigateToUrl(url: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WindowRef, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WindowRef>;
}
