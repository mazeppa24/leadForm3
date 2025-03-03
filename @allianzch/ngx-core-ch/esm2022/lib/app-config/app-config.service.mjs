import { Inject, Injectable, Optional } from '@angular/core';
import { APP_CONFIG_SERVICE_CONFIG_TOKEN } from './app-config-service-config-token';
import * as i0 from "@angular/core";
export class AppConfigService {
    constructor(config) {
        this.config = config;
        this._config = {
            environment: '',
            apiServerRoot: '',
            authenticationEndpointUrl: '',
            authenticationCallbackUrl: '',
            baseUrl: '',
        };
        // apply only if defined
        if (config) {
            if (config.environment) {
                this._config.environment = config.environment;
            }
            if (config.apiServerRoot) {
                this._config.apiServerRoot = config.apiServerRoot;
            }
            if (config.authenticationEndpointUrl) {
                this._config.authenticationEndpointUrl = config.authenticationEndpointUrl;
            }
            if (config.authenticationCallbackUrl) {
                this._config.authenticationCallbackUrl = config.authenticationCallbackUrl;
            }
            if (config.baseUrl) {
                this._config.baseUrl = config.baseUrl;
            }
        }
    }
    get environment() {
        return this._config.environment;
    }
    get apiServerRoot() {
        return this._config.apiServerRoot;
    }
    get authenticationEndpointUrl() {
        return this._config.authenticationEndpointUrl;
    }
    get authenticationCallbackUrl() {
        return this._config.authenticationCallbackUrl;
    }
    get baseUrl() {
        return this._config.baseUrl;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: AppConfigService, deps: [{ token: APP_CONFIG_SERVICE_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: AppConfigService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: AppConfigService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [APP_CONFIG_SERVICE_CONFIG_TOKEN]
                }, {
                    type: Optional
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWxsaWFuemNoL25neC1jb3JlLWNoL3NyYy9saWIvYXBwLWNvbmZpZy9hcHAtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUdwRixNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCLFlBQXlFLE1BQThCO1FBQTlCLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBUi9GLFlBQU8sR0FBMkI7WUFDeEMsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtZQUNqQix5QkFBeUIsRUFBRSxFQUFFO1lBQzdCLHlCQUF5QixFQUFFLEVBQUU7WUFDN0IsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBR0Esd0JBQXdCO1FBQ3hCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQy9DO1lBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ25EO1lBRUQsSUFBSSxNQUFNLENBQUMseUJBQXlCLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO2FBQzNFO1lBRUQsSUFBSSxNQUFNLENBQUMseUJBQXlCLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO2FBQzNFO1lBRUQsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSx5QkFBeUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs4R0FwRFUsZ0JBQWdCLGtCQVNQLCtCQUErQjtrSEFUeEMsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVOzswQkFVSSxNQUFNOzJCQUFDLCtCQUErQjs7MEJBQUcsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2VDb25maWcgfSBmcm9tICcuL2FwcC1jb25maWctc2VydmljZS1jb25maWcnO1xuaW1wb3J0IHsgQVBQX0NPTkZJR19TRVJWSUNFX0NPTkZJR19UT0tFTiB9IGZyb20gJy4vYXBwLWNvbmZpZy1zZXJ2aWNlLWNvbmZpZy10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDb25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY29uZmlnOiBBcHBDb25maWdTZXJ2aWNlQ29uZmlnID0ge1xuICAgIGVudmlyb25tZW50OiAnJyxcbiAgICBhcGlTZXJ2ZXJSb290OiAnJyxcbiAgICBhdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsOiAnJyxcbiAgICBhdXRoZW50aWNhdGlvbkNhbGxiYWNrVXJsOiAnJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFQUF9DT05GSUdfU0VSVklDRV9DT05GSUdfVE9LRU4pIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnOiBBcHBDb25maWdTZXJ2aWNlQ29uZmlnKSB7XG4gICAgLy8gYXBwbHkgb25seSBpZiBkZWZpbmVkXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCkge1xuICAgICAgICB0aGlzLl9jb25maWcuZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuYXBpU2VydmVyUm9vdCkge1xuICAgICAgICB0aGlzLl9jb25maWcuYXBpU2VydmVyUm9vdCA9IGNvbmZpZy5hcGlTZXJ2ZXJSb290O1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmF1dGhlbnRpY2F0aW9uRW5kcG9pbnRVcmwgPSBjb25maWcuYXV0aGVudGljYXRpb25FbmRwb2ludFVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5hdXRoZW50aWNhdGlvbkNhbGxiYWNrVXJsKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5hdXRoZW50aWNhdGlvbkNhbGxiYWNrVXJsID0gY29uZmlnLmF1dGhlbnRpY2F0aW9uQ2FsbGJhY2tVcmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuYmFzZVVybCkge1xuICAgICAgICB0aGlzLl9jb25maWcuYmFzZVVybCA9IGNvbmZpZy5iYXNlVXJsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbnZpcm9ubWVudCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuZW52aXJvbm1lbnQ7XG4gIH1cblxuICBnZXQgYXBpU2VydmVyUm9vdCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuYXBpU2VydmVyUm9vdDtcbiAgfVxuXG4gIGdldCBhdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hdXRoZW50aWNhdGlvbkVuZHBvaW50VXJsO1xuICB9XG5cbiAgZ2V0IGF1dGhlbnRpY2F0aW9uQ2FsbGJhY2tVcmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmF1dGhlbnRpY2F0aW9uQ2FsbGJhY2tVcmw7XG4gIH1cblxuICBnZXQgYmFzZVVybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgfVxufVxuIl19