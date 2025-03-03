import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCoreChSpinnerComponent } from './loading-spinner.component';
// NDBX
import { NdbxSharedModule } from '../../ndbx-shared.module';
import * as i0 from "@angular/core";
export class NgxCoreChSpinnerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, declarations: [NgxCoreChSpinnerComponent], imports: [CommonModule, NdbxSharedModule], exports: [NgxCoreChSpinnerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, imports: [CommonModule, NdbxSharedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChSpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxCoreChSpinnerComponent],
                    imports: [CommonModule, NdbxSharedModule],
                    exports: [NgxCoreChSpinnerComponent],
                    bootstrap: [],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zcGlubmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FsbGlhbnpjaC9uZ3gtY29yZS1jaC9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFeEUsT0FBTztBQUNQLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQVM1RCxNQUFNLE9BQU8sc0JBQXNCOzhHQUF0QixzQkFBc0I7K0dBQXRCLHNCQUFzQixpQkFObEIseUJBQXlCLGFBQzlCLFlBQVksRUFBRSxnQkFBZ0IsYUFDOUIseUJBQXlCOytHQUl4QixzQkFBc0IsWUFMdkIsWUFBWSxFQUFFLGdCQUFnQjs7MkZBSzdCLHNCQUFzQjtrQkFQbEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDekMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDcEMsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsU0FBUyxFQUFFLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4Q29yZUNoU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbi8vIE5EQlhcbmltcG9ydCB7IE5kYnhTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9uZGJ4LXNoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ3hDb3JlQ2hTcGlubmVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmRieFNoYXJlZE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOZ3hDb3JlQ2hTcGlubmVyQ29tcG9uZW50XSxcbiAgYm9vdHN0cmFwOiBbXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q29yZUNoU3Bpbm5lck1vZHVsZSB7fVxuIl19