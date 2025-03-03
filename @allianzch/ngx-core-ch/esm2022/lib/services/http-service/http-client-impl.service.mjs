import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientService } from './http-client-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../app-config/app-config.service";
/**
 * Wrapper around built-in Angular HTTP Service
 */
export class HttpClientImplService extends HttpClientService {
    constructor(httpClient, appConfigService) {
        super();
        this.httpClient = httpClient;
        this.appConfigService = appConfigService;
    }
    get(url, options) {
        // assemble the Http Options, including header, etc..
        const httpOptions = {
            headers: this.buildHttpHeaders(),
        };
        if (options) {
            if (options.params) {
                // include optionally params if exists
                // TODO: linter fix
                // httpOptions['params'] = options.params;
            }
            if (options.responseType) {
                // TODO: linter fix
                //httpOptions['responseType'] = options.responseType;
            }
        }
        return this.httpClient.get(this.prepareUrlForRequest(url), httpOptions);
    }
    post(url, body, options) {
        return this.httpClient.post(this.prepareUrlForRequest(url), body, { headers: this.buildHttpHeaders() });
    }
    put(url, body, options) {
        return this.httpClient.put(this.prepareUrlForRequest(url), body, { headers: this.buildHttpHeaders() });
    }
    delete(url, options) {
        return this.httpClient.delete(this.prepareUrlForRequest(url), { headers: this.buildHttpHeaders() });
    }
    /**
     * prepares the url by calling
     * - appendApiServerRoot
     * - encodeQueryParams
     * @param url the url to prepare
     * @returns the prepared url
     */
    prepareUrlForRequest(url) {
        const urlWithServerRoot = this.appendApiServerRoot(url);
        if (this.extractQueryParamsFromUrl(url)) {
            const baseUrlWithServerRoot = urlWithServerRoot.substring(0, urlWithServerRoot.indexOf('?'));
            const encodedQueryParams = this.encodeQueryParams(encodeURI(urlWithServerRoot));
            return baseUrlWithServerRoot + '?' + encodedQueryParams;
        }
        return urlWithServerRoot;
    }
    /**
     * @param boolean useLoadingSpinner - Only if this is set to true, we will consider showing a spinner
     * @param string spinnerId - Specifies which spinner is addressed as there could be multiple ones
     * @returns HttpHeaders -If we did not have any order to show a spinner, we just return empty headers
     */
    buildHttpHeaders() {
        return new HttpHeaders();
    }
    /**
     * Encodes the url query params like in address search 'biel/bienne'
     * atm we just encode the slash, because all of the following methods have drawbacks.
     * - encodeURI
     * - encodeURIComponent
     * - URLSearchParams
     * @param url the url to encode
     * @returns the encoded url
     */
    encodeQueryParams(url) {
        let encodedQueryParams = '';
        const extractedQueryParams = this.extractQueryParamsFromUrl(url);
        // url has query params
        if (extractedQueryParams) {
            encodedQueryParams = extractedQueryParams.replace(new RegExp('/', 'g'), '%2F');
        }
        return encodedQueryParams;
    }
    /**
     * extracts the query param string from the given url
     * @param url the given url
     * @returns the query param string or undefined if there are no query params
     */
    extractQueryParamsFromUrl(url) {
        let queryParams;
        if (url.indexOf('?') >= 0) {
            queryParams = url.substring(url.indexOf('?') + 1);
        }
        return queryParams;
    }
    /**
     * If url is relative then the `apiServerRoot` is appended to the url else return the url
     * @param string url - A string containing the URL to which the request is sent.
     * @returns string url's absolute path
     */
    appendApiServerRoot(url) {
        // if url's absolute path is given then just return that url
        if (url && url[0].indexOf('/') === -1) {
            return url;
        }
        return `${this.appConfigService.apiServerRoot}${url}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: HttpClientImplService, deps: [{ token: i1.HttpClient }, { token: i2.AppConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: HttpClientImplService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: HttpClientImplService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: i2.AppConfigService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jbGllbnQtaW1wbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWxsaWFuemNoL25neC1jb3JlLWNoL3NyYy9saWIvc2VydmljZXMvaHR0cC1zZXJ2aWNlL2h0dHAtY2xpZW50LWltcGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxXQUFXLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUcxRDs7R0FFRztBQUVILE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFDMUQsWUFDVSxVQUFzQixFQUN0QixnQkFBa0M7UUFFMUMsS0FBSyxFQUFFLENBQUM7UUFIQSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHNUMsQ0FBQztJQUVELEdBQUcsQ0FDRCxHQUFXLEVBQ1gsT0FPQztRQUVELHFEQUFxRDtRQUNyRCxNQUFNLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1NBQ2pDLENBQUM7UUFFRixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsc0NBQXNDO2dCQUN0QyxtQkFBbUI7Z0JBQ25CLDBDQUEwQzthQUMzQztZQUVELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDeEIsbUJBQW1CO2dCQUNuQixxREFBcUQ7YUFDdEQ7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxJQUFJ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QixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWNsaWVudC1zZXJ2aWNlJztcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAtY29uZmlnL2FwcC1jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogV3JhcHBlciBhcm91bmQgYnVpbHQtaW4gQW5ndWxhciBIVFRQIFNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRJbXBsU2VydmljZSBleHRlbmRzIEh0dHBDbGllbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgYXBwQ29uZmlnU2VydmljZTogQXBwQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86IHN0cmluZztcbiAgICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7IFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86IHN0cmluZztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgLy8gYXNzZW1ibGUgdGhlIEh0dHAgT3B0aW9ucywgaW5jbHVkaW5nIGhlYWRlciwgZXRjLi5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuYnVpbGRIdHRwSGVhZGVycygpLFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIC8vIGluY2x1ZGUgb3B0aW9uYWxseSBwYXJhbXMgaWYgZXhpc3RzXG4gICAgICAgIC8vIFRPRE86IGxpbnRlciBmaXhcbiAgICAgICAgLy8gaHR0cE9wdGlvbnNbJ3BhcmFtcyddID0gb3B0aW9ucy5wYXJhbXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAvLyBUT0RPOiBsaW50ZXIgZml4XG4gICAgICAgIC8vaHR0cE9wdGlvbnNbJ3Jlc3BvbnNlVHlwZSddID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFQ+KHRoaXMucHJlcGFyZVVybEZvclJlcXVlc3QodXJsKSwgaHR0cE9wdGlvbnMpO1xuICB9XG5cbiAgcG9zdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiBzdHJpbmc7XG4gICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwgeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxUPih0aGlzLnByZXBhcmVVcmxGb3JSZXF1ZXN0KHVybCksIGJvZHksIHsgaGVhZGVyczogdGhpcy5idWlsZEh0dHBIZWFkZXJzKCkgfSk7XG4gIH1cblxuICBwdXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogc3RyaW5nO1xuICAgICAgcGFyYW1zPzogSHR0cFBhcmFtcyB8IHsgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dDxUPih0aGlzLnByZXBhcmVVcmxGb3JSZXF1ZXN0KHVybCksIGJvZHksIHsgaGVhZGVyczogdGhpcy5idWlsZEh0dHBIZWFkZXJzKCkgfSk7XG4gIH1cblxuICBkZWxldGU8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiBzdHJpbmc7XG4gICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwgeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZGVsZXRlPFQ+KHRoaXMucHJlcGFyZVVybEZvclJlcXVlc3QodXJsKSwgeyBoZWFkZXJzOiB0aGlzLmJ1aWxkSHR0cEhlYWRlcnMoKSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmVwYXJlcyB0aGUgdXJsIGJ5IGNhbGxpbmdcbiAgICogLSBhcHBlbmRBcGlTZXJ2ZXJSb290XG4gICAqIC0gZW5jb2RlUXVlcnlQYXJhbXNcbiAgICogQHBhcmFtIHVybCB0aGUgdXJsIHRvIHByZXBhcmVcbiAgICogQHJldHVybnMgdGhlIHByZXBhcmVkIHVybFxuICAgKi9cbiAgcHJlcGFyZVVybEZvclJlcXVlc3QodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybFdpdGhTZXJ2ZXJSb290ID0gdGhpcy5hcHBlbmRBcGlTZXJ2ZXJSb290KHVybCk7XG4gICAgaWYgKHRoaXMuZXh0cmFjdFF1ZXJ5UGFyYW1zRnJvbVVybCh1cmwpKSB7XG4gICAgICBjb25zdCBiYXNlVXJsV2l0aFNlcnZlclJvb3QgPSB1cmxXaXRoU2VydmVyUm9vdC5zdWJzdHJpbmcoMCwgdXJsV2l0aFNlcnZlclJvb3QuaW5kZXhPZignPycpKTtcbiAgICAgIGNvbnN0IGVuY29kZWRRdWVyeVBhcmFtcyA9IHRoaXMuZW5jb2RlUXVlcnlQYXJhbXMoZW5jb2RlVVJJKHVybFdpdGhTZXJ2ZXJSb290KSk7XG4gICAgICByZXR1cm4gYmFzZVVybFdpdGhTZXJ2ZXJSb290ICsgJz8nICsgZW5jb2RlZFF1ZXJ5UGFyYW1zO1xuICAgIH1cbiAgICByZXR1cm4gdXJsV2l0aFNlcnZlclJvb3Q7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGJvb2xlYW4gdXNlTG9hZGluZ1NwaW5uZXIgLSBPbmx5IGlmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHdlIHdpbGwgY29uc2lkZXIgc2hvd2luZyBhIHNwaW5uZXJcbiAgICogQHBhcmFtIHN0cmluZyBzcGlubmVySWQgLSBTcGVjaWZpZXMgd2hpY2ggc3Bpbm5lciBpcyBhZGRyZXNzZWQgYXMgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgb25lc1xuICAgKiBAcmV0dXJucyBIdHRwSGVhZGVycyAtSWYgd2UgZGlkIG5vdCBoYXZlIGFueSBvcmRlciB0byBzaG93IGEgc3Bpbm5lciwgd2UganVzdCByZXR1cm4gZW1wdHkgaGVhZGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBidWlsZEh0dHBIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyB0aGUgdXJsIHF1ZXJ5IHBhcmFtcyBsaWtlIGluIGFkZHJlc3Mgc2VhcmNoICdiaWVsL2JpZW5uZSdcbiAgICogYXRtIHdlIGp1c3QgZW5jb2RlIHRoZSBzbGFzaCwgYmVjYXVzZSBhbGwgb2YgdGhlIGZvbGxvd2luZyBtZXRob2RzIGhhdmUgZHJhd2JhY2tzLlxuICAgKiAtIGVuY29kZVVSSVxuICAgKiAtIGVuY29kZVVSSUNvbXBvbmVudFxuICAgKiAtIFVSTFNlYXJjaFBhcmFtc1xuICAgKiBAcGFyYW0gdXJsIHRoZSB1cmwgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zIHRoZSBlbmNvZGVkIHVybFxuICAgKi9cbiAgcHJpdmF0ZSBlbmNvZGVRdWVyeVBhcmFtcyh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGVuY29kZWRRdWVyeVBhcmFtcyA9ICcnO1xuICAgIGNvbnN0IGV4dHJhY3RlZFF1ZXJ5UGFyYW1zID0gdGhpcy5leHRyYWN0UXVlcnlQYXJhbXNGcm9tVXJsKHVybCk7XG4gICAgLy8gdXJsIGhhcyBxdWVyeSBwYXJhbXNcbiAgICBpZiAoZXh0cmFjdGVkUXVlcnlQYXJhbXMpIHtcbiAgICAgIGVuY29kZWRRdWVyeVBhcmFtcyA9IGV4dHJhY3RlZFF1ZXJ5UGFyYW1zLnJlcGxhY2UobmV3IFJlZ0V4cCgnLycsICdnJyksICclMkYnKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZWRRdWVyeVBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBleHRyYWN0cyB0aGUgcXVlcnkgcGFyYW0gc3RyaW5nIGZyb20gdGhlIGdpdmVuIHVybFxuICAgKiBAcGFyYW0gdXJsIHRoZSBnaXZlbiB1cmxcbiAgICogQHJldHVybnMgdGhlIHF1ZXJ5IHBhcmFtIHN0cmluZyBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG5vIHF1ZXJ5IHBhcmFtc1xuICAgKi9cbiAgcHJpdmF0ZSBleHRyYWN0UXVlcnlQYXJhbXNGcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcXVlcnlQYXJhbXM7XG4gICAgaWYgKHVybC5pbmRleE9mKCc/JykgPj0gMCkge1xuICAgICAgcXVlcnlQYXJhbXMgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKCc/JykgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHVybCBpcyByZWxhdGl2ZSB0aGVuIHRoZSBgYXBpU2VydmVyUm9vdGAgaXMgYXBwZW5kZWQgdG8gdGhlIHVybCBlbHNlIHJldHVybiB0aGUgdXJsXG4gICAqIEBwYXJhbSBzdHJpbmcgdXJsIC0gQSBzdHJpbmcgY29udGFpbmluZyB0aGUgVVJMIHRvIHdoaWNoIHRoZSByZXF1ZXN0IGlzIHNlbnQuXG4gICAqIEByZXR1cm5zIHN0cmluZyB1cmwncyBhYnNvbHV0ZSBwYXRoXG4gICAqL1xuICBwcml2YXRlIGFwcGVuZEFwaVNlcnZlclJvb3QodXJsOiBzdHJpbmcpIHtcbiAgICAvLyBpZiB1cmwncyBhYnNvbHV0ZSBwYXRoIGlzIGdpdmVuIHRoZW4ganVzdCByZXR1cm4gdGhhdCB1cmxcbiAgICBpZiAodXJsICYmIHVybFswXS5pbmRleE9mKCcvJykgPT09IC0xKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5hcHBDb25maWdTZXJ2aWNlLmFwaVNlcnZlclJvb3R9JHt1cmx9YDtcbiAgfVxufVxuIl19