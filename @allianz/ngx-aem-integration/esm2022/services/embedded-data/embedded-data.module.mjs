import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EmbeddedDataMockService } from './embedded-data-mock.service';
import { EMBEDDED_DATA_SERVICE_CONFIG_TOKEN, EmbeddedDataService } from './embedded-data.service';
import * as i0 from "@angular/core";
export class EmbeddedDataModule {
    static forRoot(serviceConfig) {
        return {
            ngModule: EmbeddedDataModule,
            providers: [
                { provide: EMBEDDED_DATA_SERVICE_CONFIG_TOKEN, useValue: serviceConfig }, //
                EmbeddedDataService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule, providers: [provideHttpClient(withInterceptorsFromDi())] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataModule, decorators: [{
            type: NgModule,
            args: [{ providers: [provideHttpClient(withInterceptorsFromDi())] }]
        }] });
export class EmbeddedDataMockModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule, providers: [{ provide: EmbeddedDataService, useClass: EmbeddedDataMockService }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: EmbeddedDataMockModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [{ provide: EmbeddedDataService, useClass: EmbeddedDataMockService }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWRkZWQtZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJyYXJ5L3NyYy9zZXJ2aWNlcy9lbWJlZGRlZC1kYXRhL2VtYmVkZGVkLWRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxtQkFBbUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7QUFHN0gsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQXlDO1FBQ3RELE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRTtnQkFDNUUsbUJBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OEdBVFUsa0JBQWtCOytHQUFsQixrQkFBa0I7K0dBQWxCLGtCQUFrQixhQURSLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDOzsyRkFDdkQsa0JBQWtCO2tCQUQ5QixRQUFRO21CQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLEVBQUU7O0FBZ0J0RSxNQUFNLE9BQU8sc0JBQXNCOzhHQUF0QixzQkFBc0I7K0dBQXRCLHNCQUFzQjsrR0FBdEIsc0JBQXNCLGFBRnRCLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLENBQUM7OzJGQUVyRSxzQkFBc0I7a0JBSGxDLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLENBQUM7aUJBQ2pGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvdmlkZUh0dHBDbGllbnQsIHdpdGhJbnRlcmNlcHRvcnNGcm9tRGkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1iZWRkZWREYXRhTW9ja1NlcnZpY2UgfSBmcm9tICcuL2VtYmVkZGVkLWRhdGEtbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IEVNQkVEREVEX0RBVEFfU0VSVklDRV9DT05GSUdfVE9LRU4sIEVtYmVkZGVkRGF0YVNlcnZpY2UsIEVtYmVkZGVkRGF0YVNlcnZpY2VDb25maWcgfSBmcm9tICcuL2VtYmVkZGVkLWRhdGEuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7IHByb3ZpZGVyczogW3Byb3ZpZGVIdHRwQ2xpZW50KHdpdGhJbnRlcmNlcHRvcnNGcm9tRGkoKSldIH0pXG5leHBvcnQgY2xhc3MgRW1iZWRkZWREYXRhTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc2VydmljZUNvbmZpZz86IEVtYmVkZGVkRGF0YVNlcnZpY2VDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVtYmVkZGVkRGF0YU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRW1iZWRkZWREYXRhTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogRU1CRURERURfREFUQV9TRVJWSUNFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IHNlcnZpY2VDb25maWcgfSwgLy9cbiAgICAgICAgRW1iZWRkZWREYXRhU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEVtYmVkZGVkRGF0YVNlcnZpY2UsIHVzZUNsYXNzOiBFbWJlZGRlZERhdGFNb2NrU2VydmljZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgRW1iZWRkZWREYXRhTW9ja01vZHVsZSB7fVxuIl19