import { PipeTransform } from '@angular/core';
import { NormalizeUrlService } from './normalize-url.service';
import * as i0 from "@angular/core";
export declare class NormalizeUrlPipe implements PipeTransform {
    private normalizeUrlService;
    constructor(normalizeUrlService: NormalizeUrlService);
    transform(value: string): unknown;
    static ɵfac: i0.ɵɵFactoryDeclaration<NormalizeUrlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NormalizeUrlPipe, "aemNormalizeUrl", false>;
}
