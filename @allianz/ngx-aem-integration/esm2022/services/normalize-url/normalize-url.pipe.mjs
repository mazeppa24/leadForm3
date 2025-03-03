import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./normalize-url.service";
export class NormalizeUrlPipe {
    constructor(normalizeUrlService) {
        this.normalizeUrlService = normalizeUrlService;
    }
    transform(value) {
        return this.normalizeUrlService.normalizeUrl(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlPipe, deps: [{ token: i1.NormalizeUrlService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlPipe, name: "aemNormalizeUrl" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'aemNormalizeUrl',
                }]
        }], ctorParameters: () => [{ type: i1.NormalizeUrlService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9zcmMvc2VydmljZXMvbm9ybWFsaXplLXVybC9ub3JtYWxpemUtdXJsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQU1wRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQUcsQ0FBQztJQUVoRSxTQUFTLENBQUMsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs4R0FMVSxnQkFBZ0I7NEdBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFINUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsaUJBQWlCO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vcm1hbGl6ZVVybFNlcnZpY2UgfSBmcm9tICcuL25vcm1hbGl6ZS11cmwuc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FlbU5vcm1hbGl6ZVVybCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vcm1hbGl6ZVVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3JtYWxpemVVcmxTZXJ2aWNlOiBOb3JtYWxpemVVcmxTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogdW5rbm93biB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplVXJsU2VydmljZS5ub3JtYWxpemVVcmwodmFsdWUpO1xuICB9XG59XG4iXX0=