import { Directive, ElementRef, Renderer2, Input, Inject } from '@angular/core';
import { NormalizeUrlService } from './normalize-url.service';
import * as i0 from "@angular/core";
import * as i1 from "./normalize-url.service";
export class NormalizeUrlDirective {
    set src(val) {
        this._renderer.setAttribute(this._el.nativeElement, 'src', this._normalizeUrlService.normalizeUrl(val));
    }
    constructor(_el, _renderer, _normalizeUrlService) {
        this._el = _el;
        this._renderer = _renderer;
        this._normalizeUrlService = _normalizeUrlService;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlDirective, deps: [{ token: ElementRef }, { token: Renderer2 }, { token: NormalizeUrlService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.1", type: NormalizeUrlDirective, selector: "[aemNormalizeUrl] [src]", inputs: { src: "src" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line
                    selector: '[aemNormalizeUrl] [src]',
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }, { type: i1.NormalizeUrlService, decorators: [{
                    type: Inject,
                    args: [NormalizeUrlService]
                }] }], propDecorators: { src: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLXVybC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJyYXJ5L3NyYy9zZXJ2aWNlcy9ub3JtYWxpemUtdXJsL25vcm1hbGl6ZS11cmwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFNOUQsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxJQUNXLEdBQUcsQ0FBQyxHQUFXO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELFlBQzhCLEdBQWUsRUFDaEIsU0FBb0IsRUFDVixvQkFBeUM7UUFGbEQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ1YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUM3RSxDQUFDOzhHQVZPLHFCQUFxQixrQkFPdEIsVUFBVSxhQUNWLFNBQVMsYUFDVCxtQkFBbUI7a0dBVGxCLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFKakMsU0FBUzttQkFBQztvQkFDVCwyQkFBMkI7b0JBQzNCLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3BDOzswQkFRSSxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLFNBQVM7OzBCQUNoQixNQUFNOzJCQUFDLG1CQUFtQjt5Q0FQbEIsR0FBRztzQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vcm1hbGl6ZVVybFNlcnZpY2UgfSBmcm9tICcuL25vcm1hbGl6ZS11cmwuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgc2VsZWN0b3I6ICdbYWVtTm9ybWFsaXplVXJsXSBbc3JjXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vcm1hbGl6ZVVybERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3JjKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB0aGlzLl9ub3JtYWxpemVVcmxTZXJ2aWNlLm5vcm1hbGl6ZVVybCh2YWwpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChOb3JtYWxpemVVcmxTZXJ2aWNlKSBwcml2YXRlIF9ub3JtYWxpemVVcmxTZXJ2aWNlOiBOb3JtYWxpemVVcmxTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==