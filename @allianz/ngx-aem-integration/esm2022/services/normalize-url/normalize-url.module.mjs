import { NgModule } from '@angular/core';
import { NormalizeUrlDirective } from './normalize-url.directive';
import { NormalizeUrlPipe } from './normalize-url.pipe';
import * as i0 from "@angular/core";
export class NormalizeUrlModule {
    static forRoot(normalizeUrlServiceConfigProvider) {
        return {
            ngModule: NormalizeUrlModule,
            providers: [normalizeUrlServiceConfigProvider],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule, declarations: [NormalizeUrlDirective, NormalizeUrlPipe], exports: [NormalizeUrlDirective, NormalizeUrlPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NormalizeUrlDirective, NormalizeUrlPipe],
                    exports: [NormalizeUrlDirective, NormalizeUrlPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLXVybC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJyYXJ5L3NyYy9zZXJ2aWNlcy9ub3JtYWxpemUtdXJsL25vcm1hbGl6ZS11cmwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU14RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUNBQTJDO1FBQ3hELE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDOzhHQU5VLGtCQUFrQjsrR0FBbEIsa0JBQWtCLGlCQUhkLHFCQUFxQixFQUFFLGdCQUFnQixhQUM1QyxxQkFBcUIsRUFBRSxnQkFBZ0I7K0dBRXRDLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFKOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDdkQsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3JtYWxpemVVcmxEaXJlY3RpdmUgfSBmcm9tICcuL25vcm1hbGl6ZS11cmwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vcm1hbGl6ZVVybFBpcGUgfSBmcm9tICcuL25vcm1hbGl6ZS11cmwucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05vcm1hbGl6ZVVybERpcmVjdGl2ZSwgTm9ybWFsaXplVXJsUGlwZV0sXG4gIGV4cG9ydHM6IFtOb3JtYWxpemVVcmxEaXJlY3RpdmUsIE5vcm1hbGl6ZVVybFBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3JtYWxpemVVcmxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChub3JtYWxpemVVcmxTZXJ2aWNlQ29uZmlnUHJvdmlkZXI6IFByb3ZpZGVyKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOb3JtYWxpemVVcmxNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5vcm1hbGl6ZVVybE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW25vcm1hbGl6ZVVybFNlcnZpY2VDb25maWdQcm92aWRlcl0sXG4gICAgfTtcbiAgfVxufVxuIl19