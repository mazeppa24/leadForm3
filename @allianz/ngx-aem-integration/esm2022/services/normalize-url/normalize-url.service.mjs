import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { aemIntegrationAppServerURLProperty } from '../../constants';
import * as i0 from "@angular/core";
export const NORMALIZE_URL_SERVICE_CONFIG_TOKEN = new InjectionToken('NORMALIZE_URL_SERVICE_CONFIG_TOKEN');
export class NormalizeUrlService {
    constructor(config, document) {
        this.config = config;
        this.document = document;
        this._config = {
            baseHref: '',
            deployUrl: '',
        };
        // apply only if defined
        if (config) {
            if (config.baseHref) {
                this._config.baseHref = config.baseHref;
            }
            if (config.deployUrl) {
                this._config.deployUrl = config.deployUrl;
            }
        }
        // If no deployURL was configured, check if the loader script automatically determined the deploy URL:
        if ((!this._config || !this._config.deployUrl) && document && document[aemIntegrationAppServerURLProperty]) {
            this._config.deployUrl = document[aemIntegrationAppServerURLProperty];
        }
    }
    /**
     * Taken from angular-cli/packages/@angular/cli/models/webpack-configs/styles.ts
     *
     * @param URL
     */
    normalizeUrl(URL) {
        // Is URL valid?
        if (typeof URL !== 'string' || URL.length < 1) {
            return '';
        }
        // Only convert root relative URLs, which CSS-Loader won't process into require().
        if (!URL.startsWith('/') || URL.startsWith('//')) {
            return URL;
        }
        if (this._config.deployUrl.match(/:\/\//)) {
            // If deployUrl contains a scheme, ignore baseHref use deployUrl as is.
            return `${this._config.deployUrl.replace(/\/$/, '')}${URL}`;
        }
        else if (this._config.baseHref.match(/:\/\//)) {
            // If baseHref contains a scheme, include it as is.
            return this._config.baseHref.replace(/\/$/, '') + `/${this._config.deployUrl}/${URL}`.replace(/\/\/+/g, '/');
        }
        else {
            // Join together base-href, deploy-url and the original URL.
            // Also dedupe multiple slashes into single ones.
            return `/${this._config.baseHref}/${this._config.deployUrl}/${URL}`.replace(/\/\/+/g, '/');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlService, deps: [{ token: NORMALIZE_URL_SERVICE_CONFIG_TOKEN, optional: true }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NormalizeUrlService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NORMALIZE_URL_SERVICE_CONFIG_TOKEN]
                }, {
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }, {
                    type: Optional
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLXVybC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9zcmMvc2VydmljZXMvbm9ybWFsaXplLXVybC9ub3JtYWxpemUtdXJsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXJFLE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUFHLElBQUksY0FBYyxDQUE0QixvQ0FBb0MsQ0FBQyxDQUFDO0FBVXRJLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsWUFDa0UsTUFBaUMsRUFDM0QsUUFBUTtRQURrQixXQUFNLEdBQU4sTUFBTSxDQUEyQjtRQUMzRCxhQUFRLEdBQVIsUUFBUSxDQUFBO1FBUHhDLFlBQU8sR0FBOEI7WUFDM0MsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFNQSx3QkFBd0I7UUFDeEIsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQzFDLENBQUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQztRQUVELHNHQUFzRztRQUN0RyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLGtDQUFrQyxDQUFDLEVBQUUsQ0FBQztZQUMzRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN4RSxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsR0FBVztRQUN0QixnQkFBZ0I7UUFDaEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM5QyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7UUFFRCxrRkFBa0Y7UUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDMUMsdUVBQXVFO1lBQ3ZFLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzlELENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hELG1EQUFtRDtZQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9HLENBQUM7YUFBTSxDQUFDO1lBQ04sNERBQTREO1lBQzVELGlEQUFpRDtZQUNqRCxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0gsQ0FBQzs4R0FyRFUsbUJBQW1CLGtCQU9wQixrQ0FBa0MsNkJBQ2xDLFFBQVE7a0hBUlAsbUJBQW1CLGNBRmxCLE1BQU07OzJGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQVFJLE1BQU07MkJBQUMsa0NBQWtDOzswQkFBRyxRQUFROzswQkFDcEQsTUFBTTsyQkFBQyxRQUFROzswQkFBRyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGFlbUludGVncmF0aW9uQXBwU2VydmVyVVJMUHJvcGVydHkgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgTk9STUFMSVpFX1VSTF9TRVJWSUNFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxOb3JtYWxpemVVcmxTZXJ2aWNlQ29uZmlnPignTk9STUFMSVpFX1VSTF9TRVJWSUNFX0NPTkZJR19UT0tFTicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vcm1hbGl6ZVVybFNlcnZpY2VDb25maWcge1xuICBiYXNlSHJlZj86IHN0cmluZztcbiAgZGVwbG95VXJsPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm9ybWFsaXplVXJsU2VydmljZSB7XG4gIHByaXZhdGUgX2NvbmZpZzogTm9ybWFsaXplVXJsU2VydmljZUNvbmZpZyA9IHtcbiAgICBiYXNlSHJlZjogJycsXG4gICAgZGVwbG95VXJsOiAnJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE5PUk1BTElaRV9VUkxfU0VSVklDRV9DT05GSUdfVE9LRU4pIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnOiBOb3JtYWxpemVVcmxTZXJ2aWNlQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIEBPcHRpb25hbCgpIHByaXZhdGUgZG9jdW1lbnRcbiAgKSB7XG4gICAgLy8gYXBwbHkgb25seSBpZiBkZWZpbmVkXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgaWYgKGNvbmZpZy5iYXNlSHJlZikge1xuICAgICAgICB0aGlzLl9jb25maWcuYmFzZUhyZWYgPSBjb25maWcuYmFzZUhyZWY7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmRlcGxveVVybCkge1xuICAgICAgICB0aGlzLl9jb25maWcuZGVwbG95VXJsID0gY29uZmlnLmRlcGxveVVybDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBubyBkZXBsb3lVUkwgd2FzIGNvbmZpZ3VyZWQsIGNoZWNrIGlmIHRoZSBsb2FkZXIgc2NyaXB0IGF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lZCB0aGUgZGVwbG95IFVSTDpcbiAgICBpZiAoKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2NvbmZpZy5kZXBsb3lVcmwpICYmIGRvY3VtZW50ICYmIGRvY3VtZW50W2FlbUludGVncmF0aW9uQXBwU2VydmVyVVJMUHJvcGVydHldKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVwbG95VXJsID0gZG9jdW1lbnRbYWVtSW50ZWdyYXRpb25BcHBTZXJ2ZXJVUkxQcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VuIGZyb20gYW5ndWxhci1jbGkvcGFja2FnZXMvQGFuZ3VsYXIvY2xpL21vZGVscy93ZWJwYWNrLWNvbmZpZ3Mvc3R5bGVzLnRzXG4gICAqXG4gICAqIEBwYXJhbSBVUkxcbiAgICovXG4gIG5vcm1hbGl6ZVVybChVUkw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gSXMgVVJMIHZhbGlkP1xuICAgIGlmICh0eXBlb2YgVVJMICE9PSAnc3RyaW5nJyB8fCBVUkwubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIE9ubHkgY29udmVydCByb290IHJlbGF0aXZlIFVSTHMsIHdoaWNoIENTUy1Mb2FkZXIgd29uJ3QgcHJvY2VzcyBpbnRvIHJlcXVpcmUoKS5cbiAgICBpZiAoIVVSTC5zdGFydHNXaXRoKCcvJykgfHwgVVJMLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHJldHVybiBVUkw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kZXBsb3lVcmwubWF0Y2goLzpcXC9cXC8vKSkge1xuICAgICAgLy8gSWYgZGVwbG95VXJsIGNvbnRhaW5zIGEgc2NoZW1lLCBpZ25vcmUgYmFzZUhyZWYgdXNlIGRlcGxveVVybCBhcyBpcy5cbiAgICAgIHJldHVybiBgJHt0aGlzLl9jb25maWcuZGVwbG95VXJsLnJlcGxhY2UoL1xcLyQvLCAnJyl9JHtVUkx9YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5iYXNlSHJlZi5tYXRjaCgvOlxcL1xcLy8pKSB7XG4gICAgICAvLyBJZiBiYXNlSHJlZiBjb250YWlucyBhIHNjaGVtZSwgaW5jbHVkZSBpdCBhcyBpcy5cbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuYmFzZUhyZWYucmVwbGFjZSgvXFwvJC8sICcnKSArIGAvJHt0aGlzLl9jb25maWcuZGVwbG95VXJsfS8ke1VSTH1gLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSm9pbiB0b2dldGhlciBiYXNlLWhyZWYsIGRlcGxveS11cmwgYW5kIHRoZSBvcmlnaW5hbCBVUkwuXG4gICAgICAvLyBBbHNvIGRlZHVwZSBtdWx0aXBsZSBzbGFzaGVzIGludG8gc2luZ2xlIG9uZXMuXG4gICAgICByZXR1cm4gYC8ke3RoaXMuX2NvbmZpZy5iYXNlSHJlZn0vJHt0aGlzLl9jb25maWcuZGVwbG95VXJsfS8ke1VSTH1gLnJlcGxhY2UoL1xcL1xcLysvZywgJy8nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==