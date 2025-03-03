import { Injector, NgModule } from '@angular/core';
import { HttpClientService } from './services/http-service/http-client-service';
import { httpServiceFactory } from './factories/http-service.factory';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WindowRef } from './util/window-ref';
import { MessageService } from './services/message-service/message-service';
import { messageServiceFactory } from './factories/message-service.factory';
import { TranslateService } from '@ngx-translate/core';
import { NgxCoreComponentsModule } from './components/components.module';
import { AppConfigService } from './app-config/app-config.service';
import { currentUserServiceFactory } from './factories/current-user-service.factory';
import { CurrentUserService } from './services/user-service/current-user.service';
import { Router } from '@angular/router';
import { NgxCoreChDatepicker } from './util/ngx-core-ch-datepicker';
import * as i0 from "@angular/core";
export class NgxCoreChModule {
    static forRoot(appConfigProvider) {
        return {
            ngModule: NgxCoreChModule,
            providers: [
                // App Config Service
                appConfigProvider,
                // Message Service
                {
                    provide: MessageService,
                    useFactory: messageServiceFactory,
                    deps: [Injector],
                },
                // HTTP Service
                {
                    provide: HttpClientService,
                    useFactory: httpServiceFactory,
                    deps: [HttpClient, AppConfigService],
                },
                WindowRef,
                NgxCoreChDatepicker,
                AppConfigService,
                {
                    provide: CurrentUserService,
                    useFactory: currentUserServiceFactory,
                    deps: [HttpClientService, TranslateService, Router, MessageService],
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, imports: [HttpClientModule, NgxCoreComponentsModule], exports: [NgxCoreComponentsModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, imports: [HttpClientModule, NgxCoreComponentsModule, NgxCoreComponentsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [HttpClientModule, NgxCoreComponentsModule],
                    exports: [NgxCoreComponentsModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvcmUtY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWxsaWFuemNoL25neC1jb3JlLWNoL3NyYy9saWIvbmd4LWNvcmUtY2gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBT3BFLE1BQU0sT0FBTyxlQUFlO0lBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQTJCO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QscUJBQXFCO2dCQUNyQixpQkFBaUI7Z0JBRWpCLGtCQUFrQjtnQkFDbEI7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRSxxQkFBcUI7b0JBQ2pDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDakI7Z0JBRUQsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ3JDO2dCQUVELFNBQVM7Z0JBQ1QsbUJBQW1CO2dCQUNuQixnQkFBZ0I7Z0JBRWhCO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFVBQVUsRUFBRSx5QkFBeUI7b0JBQ3JDLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7aUJBQ3BFO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs4R0FqQ1UsZUFBZTsrR0FBZixlQUFlLFlBSGhCLGdCQUFnQixFQUFFLHVCQUF1QixhQUN6Qyx1QkFBdUI7K0dBRXRCLGVBQWUsWUFIaEIsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQ3pDLHVCQUF1Qjs7MkZBRXRCLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaHR0cC1zZXJ2aWNlL2h0dHAtY2xpZW50LXNlcnZpY2UnO1xuaW1wb3J0IHsgaHR0cFNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3JpZXMvaHR0cC1zZXJ2aWNlLmZhY3RvcnknO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4vdXRpbC93aW5kb3ctcmVmJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7IG1lc3NhZ2VTZXJ2aWNlRmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2Utc2VydmljZS5mYWN0b3J5JztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IE5neENvcmVDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2FwcC1jb25maWcvYXBwLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IGN1cnJlbnRVc2VyU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL2ZhY3Rvcmllcy9jdXJyZW50LXVzZXItc2VydmljZS5mYWN0b3J5JztcbmltcG9ydCB7IEN1cnJlbnRVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci1zZXJ2aWNlL2N1cnJlbnQtdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ3hDb3JlQ2hEYXRlcGlja2VyIH0gZnJvbSAnLi91dGlsL25neC1jb3JlLWNoLWRhdGVwaWNrZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbSHR0cENsaWVudE1vZHVsZSwgTmd4Q29yZUNvbXBvbmVudHNNb2R1bGVdLFxuICBleHBvcnRzOiBbTmd4Q29yZUNvbXBvbmVudHNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb3JlQ2hNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoYXBwQ29uZmlnUHJvdmlkZXI6IFByb3ZpZGVyKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hDb3JlQ2hNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neENvcmVDaE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAvLyBBcHAgQ29uZmlnIFNlcnZpY2VcbiAgICAgICAgYXBwQ29uZmlnUHJvdmlkZXIsXG5cbiAgICAgICAgLy8gTWVzc2FnZSBTZXJ2aWNlXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBtZXNzYWdlU2VydmljZUZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBIVFRQIFNlcnZpY2VcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEh0dHBDbGllbnRTZXJ2aWNlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudCwgQXBwQ29uZmlnU2VydmljZV0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgV2luZG93UmVmLFxuICAgICAgICBOZ3hDb3JlQ2hEYXRlcGlja2VyLFxuICAgICAgICBBcHBDb25maWdTZXJ2aWNlLFxuXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDdXJyZW50VXNlclNlcnZpY2UsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY3VycmVudFVzZXJTZXJ2aWNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbSHR0cENsaWVudFNlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2UsIFJvdXRlciwgTWVzc2FnZVNlcnZpY2VdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=