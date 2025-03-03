import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Loading Spinner
import { NgxCoreChSpinnerModule } from './loading-spinner/loading-spinner.module';
// Error Page
import { NgxCoreChErrorPageModule } from './error-page/error-page.module';
// Language Selection
import { NgxCoreChLanguageSelectionModule } from './language-selection/language-selection.module';
// User Info
import { NgxCoreChUserInfoModule } from './user-info/user-info.module';
import { NgxCoreChUserInfoErrorPageModule } from './user-info/user-info-error-page/user-info-error-page.module';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxContextMenuModule } from '@aposin/ng-aquila/context-menu';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NgxCoreChMessageModule } from './message/message.module';
import * as i0 from "@angular/core";
export class NgxCoreComponentsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, imports: [CommonModule, NxIconModule, NxContextMenuModule, NxButtonModule, NxCopytextModule], exports: [NgxCoreChErrorPageModule,
            NgxCoreChSpinnerModule,
            NgxCoreChLanguageSelectionModule,
            NgxCoreChUserInfoModule,
            NgxCoreChUserInfoErrorPageModule,
            NgxCoreChMessageModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, imports: [CommonModule, NxIconModule, NxContextMenuModule, NxButtonModule, NxCopytextModule, NgxCoreChErrorPageModule,
            NgxCoreChSpinnerModule,
            NgxCoreChLanguageSelectionModule,
            NgxCoreChUserInfoModule,
            NgxCoreChUserInfoErrorPageModule,
            NgxCoreChMessageModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NxIconModule, NxContextMenuModule, NxButtonModule, NxCopytextModule],
                    declarations: [],
                    exports: [
                        NgxCoreChErrorPageModule,
                        NgxCoreChSpinnerModule,
                        NgxCoreChLanguageSelectionModule,
                        NgxCoreChUserInfoModule,
                        NgxCoreChUserInfoErrorPageModule,
                        NgxCoreChMessageModule,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLGtCQUFrQjtBQUNsQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVsRixhQUFhO0FBQ2IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFMUUscUJBQXFCO0FBQ3JCLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRWxHLFlBQVk7QUFDWixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUVoSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWVsRSxNQUFNLE9BQU8sdUJBQXVCOzhHQUF2Qix1QkFBdUI7K0dBQXZCLHVCQUF1QixZQVp4QixZQUFZLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsYUFHekYsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixnQ0FBZ0M7WUFDaEMsdUJBQXVCO1lBQ3ZCLGdDQUFnQztZQUNoQyxzQkFBc0I7K0dBSWIsdUJBQXVCLFlBWnhCLFlBQVksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUd6Rix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLGdDQUFnQztZQUNoQyx1QkFBdUI7WUFDdkIsZ0NBQWdDO1lBQ2hDLHNCQUFzQjs7MkZBSWIsdUJBQXVCO2tCQWJuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO29CQUM1RixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixnQ0FBZ0M7d0JBQ2hDLHVCQUF1Qjt3QkFDdkIsZ0NBQWdDO3dCQUNoQyxzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIExvYWRpbmcgU3Bpbm5lclxuaW1wb3J0IHsgTmd4Q29yZUNoU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4vbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5tb2R1bGUnO1xuXG4vLyBFcnJvciBQYWdlXG5pbXBvcnQgeyBOZ3hDb3JlQ2hFcnJvclBhZ2VNb2R1bGUgfSBmcm9tICcuL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5tb2R1bGUnO1xuXG4vLyBMYW5ndWFnZSBTZWxlY3Rpb25cbmltcG9ydCB7IE5neENvcmVDaExhbmd1YWdlU2VsZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9sYW5ndWFnZS1zZWxlY3Rpb24vbGFuZ3VhZ2Utc2VsZWN0aW9uLm1vZHVsZSc7XG5cbi8vIFVzZXIgSW5mb1xuaW1wb3J0IHsgTmd4Q29yZUNoVXNlckluZm9Nb2R1bGUgfSBmcm9tICcuL3VzZXItaW5mby91c2VyLWluZm8ubW9kdWxlJztcbmltcG9ydCB7IE5neENvcmVDaFVzZXJJbmZvRXJyb3JQYWdlTW9kdWxlIH0gZnJvbSAnLi91c2VyLWluZm8vdXNlci1pbmZvLWVycm9yLXBhZ2UvdXNlci1pbmZvLWVycm9yLXBhZ2UubW9kdWxlJztcblxuaW1wb3J0IHsgTnhDb3B5dGV4dE1vZHVsZSB9IGZyb20gJ0BhcG9zaW4vbmctYXF1aWxhL2NvcHl0ZXh0JztcbmltcG9ydCB7IE54QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFwb3Npbi9uZy1hcXVpbGEvYnV0dG9uJztcbmltcG9ydCB7IE54Q29udGV4dE1lbnVNb2R1bGUgfSBmcm9tICdAYXBvc2luL25nLWFxdWlsYS9jb250ZXh0LW1lbnUnO1xuaW1wb3J0IHsgTnhJY29uTW9kdWxlIH0gZnJvbSAnQGFwb3Npbi9uZy1hcXVpbGEvaWNvbic7XG5pbXBvcnQgeyBOZ3hDb3JlQ2hNZXNzYWdlTW9kdWxlIH0gZnJvbSAnLi9tZXNzYWdlL21lc3NhZ2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnhJY29uTW9kdWxlLCBOeENvbnRleHRNZW51TW9kdWxlLCBOeEJ1dHRvbk1vZHVsZSwgTnhDb3B5dGV4dE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hDb3JlQ2hFcnJvclBhZ2VNb2R1bGUsXG4gICAgTmd4Q29yZUNoU3Bpbm5lck1vZHVsZSxcbiAgICBOZ3hDb3JlQ2hMYW5ndWFnZVNlbGVjdGlvbk1vZHVsZSxcbiAgICBOZ3hDb3JlQ2hVc2VySW5mb01vZHVsZSxcbiAgICBOZ3hDb3JlQ2hVc2VySW5mb0Vycm9yUGFnZU1vZHVsZSxcbiAgICBOZ3hDb3JlQ2hNZXNzYWdlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb3JlQ29tcG9uZW50c01vZHVsZSB7fVxuIl19