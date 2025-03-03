import { ElementRef, Renderer2 } from '@angular/core';
import { NormalizeUrlService } from './normalize-url.service';
import * as i0 from "@angular/core";
export declare class NormalizeUrlDirective {
    private _el;
    private _renderer;
    private _normalizeUrlService;
    set src(val: string);
    constructor(_el: ElementRef, _renderer: Renderer2, _normalizeUrlService: NormalizeUrlService);
    static ɵfac: i0.ɵɵFactoryDeclaration<NormalizeUrlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NormalizeUrlDirective, "[aemNormalizeUrl] [src]", never, { "src": { "alias": "src"; "required": false; }; }, {}, never, never, false, never>;
}
