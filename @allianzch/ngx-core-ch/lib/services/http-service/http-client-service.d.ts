import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
export declare abstract class HttpClientService {
    /**
     * Performs a request with `get` http method.
     * @param string url - A string containing the URL to which the request is sent.
     * @param options options - Options to construct a RequestOptions, based on
     *                                       [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
     */
    abstract get<T>(url: string, options?: {
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
     * Performs a request with `post` http method.
     * @param string url - A string containing the URL to which the request is sent.
     * @param any body - The actual HTTP request data
     * @param options options - Options to construct a RequestOptions, based on
     *                                       [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
     */
    abstract post<T>(url: string, body: any, options?: {
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
     * Performs a request with `put` http method.
     * @param string url - A string containing the URL to which the request is sent.
     * @param any body - The actual HTTP request data
     * @param options options - Options to construct a RequestOptions, based on
     *                                       [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
     */
    abstract put<T>(url: string, body: any, options?: {
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
     * Performs a request with `delete` http method.
     * @param string url - A string containing the URL to which the request is sent.
     * @param options options - Options to construct a RequestOptions, based on
     *                                       [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
     */
    abstract delete<T>(url: string, options?: {
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
}
