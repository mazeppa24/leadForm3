import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientService } from './http-client-service';
import { AppConfigService } from '../../app-config/app-config.service';
import * as i0 from "@angular/core";
/**
 * Wrapper around built-in Angular HTTP Service
 */
export declare class HttpClientImplService extends HttpClientService {
    private httpClient;
    private appConfigService;
    constructor(httpClient: HttpClient, appConfigService: AppConfigService);
    get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: string;
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: string;
        withCredentials?: boolean;
    }): Observable<T>;
    post<T>(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: string;
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: string;
        withCredentials?: boolean;
    }): Observable<T>;
    put<T>(url: string, body: any, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: string;
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: string;
        withCredentials?: boolean;
    }): Observable<T>;
    delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: string;
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: string;
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * prepares the url by calling
     * - appendApiServerRoot
     * - encodeQueryParams
     * @param url the url to prepare
     * @returns the prepared url
     */
    prepareUrlForRequest(url: string): string;
    /**
     * @param boolean useLoadingSpinner - Only if this is set to true, we will consider showing a spinner
     * @param string spinnerId - Specifies which spinner is addressed as there could be multiple ones
     * @returns HttpHeaders -If we did not have any order to show a spinner, we just return empty headers
     */
    private buildHttpHeaders;
    /**
     * Encodes the url query params like in address search 'biel/bienne'
     * atm we just encode the slash, because all of the following methods have drawbacks.
     * - encodeURI
     * - encodeURIComponent
     * - URLSearchParams
     * @param url the url to encode
     * @returns the encoded url
     */
    private encodeQueryParams;
    /**
     * extracts the query param string from the given url
     * @param url the given url
     * @returns the query param string or undefined if there are no query params
     */
    private extractQueryParamsFromUrl;
    /**
     * If url is relative then the `apiServerRoot` is appended to the url else return the url
     * @param string url - A string containing the URL to which the request is sent.
     * @returns string url's absolute path
     */
    private appendApiServerRoot;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpClientImplService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpClientImplService>;
}
