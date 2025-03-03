import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@allianz/ngx-aem-integration";
export class AemTranslateLoader {
    constructor(http, normalizeUrlService, embeddedDataService) {
        this.http = http;
        this.normalizeUrlService = normalizeUrlService;
        this.embeddedDataService = embeddedDataService;
    }
    /**
     * Translations resolution logic:
     *    1. If i18n attribute was received, use that
     *    2. try global i18n
     * @param lang
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTranslation(lang) {
        // 1.
        if (this.embeddedDataService.I18n) {
            return of(this.embeddedDataService.I18n);
        }
        // 2.
        return this.http
            .get(this.normalizeUrlService.normalizeUrl(`${this.embeddedDataService.embeddedDataServiceConfig.AssetsBasePath}/i18n/${lang}.json`), { withCredentials: true })
            .pipe(catchError((err) => {
            if (!this.embeddedDataService.embeddedDataServiceConfig.production) {
                console.log(err);
            }
            return of(null);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: AemTranslateLoader, deps: [{ token: i1.HttpClient }, { token: i2.NormalizeUrlService }, { token: i2.EmbeddedDataService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: AemTranslateLoader, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: AemTranslateLoader, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: i2.NormalizeUrlService }, { type: i2.EmbeddedDataService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWVtLXRyYW5zbGF0ZS1sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWJyYXJ5L3NyYy9uZ3gtdHJhbnNsYXRlLWxvYWRlci9hZW0tdHJhbnNsYXRlLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzVDLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFDVSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsbUJBQWlEO1FBRmpELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO0lBQ3hELENBQUM7SUFFSjs7Ozs7T0FLRztJQUNILDhEQUE4RDtJQUM5RCxjQUFjLENBQUMsSUFBWTtRQUN6QixLQUFLO1FBQ0wsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLGNBQWMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxFQUMvSCxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FDMUI7YUFDQSxJQUFJLENBQ0gsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7OEdBbENVLGtCQUFrQjtrSEFBbEIsa0JBQWtCLGNBRmpCLE1BQU07OzJGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbWJlZGRlZERhdGFTZXJ2aWNlLCBOb3JtYWxpemVVcmxTZXJ2aWNlIH0gZnJvbSAnQGFsbGlhbnovbmd4LWFlbS1pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFlbVRyYW5zbGF0ZUxvYWRlciBpbXBsZW1lbnRzIFRyYW5zbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG5vcm1hbGl6ZVVybFNlcnZpY2U6IE5vcm1hbGl6ZVVybFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbWJlZGRlZERhdGFTZXJ2aWNlOiBFbWJlZGRlZERhdGFTZXJ2aWNlPHVua25vd24+LFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0aW9ucyByZXNvbHV0aW9uIGxvZ2ljOlxuICAgKiAgICAxLiBJZiBpMThuIGF0dHJpYnV0ZSB3YXMgcmVjZWl2ZWQsIHVzZSB0aGF0XG4gICAqICAgIDIuIHRyeSBnbG9iYWwgaTE4blxuICAgKiBAcGFyYW0gbGFuZ1xuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyAxLlxuICAgIGlmICh0aGlzLmVtYmVkZGVkRGF0YVNlcnZpY2UuSTE4bikge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuZW1iZWRkZWREYXRhU2VydmljZS5JMThuKTtcbiAgICB9XG5cbiAgICAvLyAyLlxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgIHRoaXMubm9ybWFsaXplVXJsU2VydmljZS5ub3JtYWxpemVVcmwoYCR7dGhpcy5lbWJlZGRlZERhdGFTZXJ2aWNlLmVtYmVkZGVkRGF0YVNlcnZpY2VDb25maWcuQXNzZXRzQmFzZVBhdGh9L2kxOG4vJHtsYW5nfS5qc29uYCksXG4gICAgICAgIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0sXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLmVtYmVkZGVkRGF0YVNlcnZpY2UuZW1iZWRkZWREYXRhU2VydmljZUNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxufVxuIl19