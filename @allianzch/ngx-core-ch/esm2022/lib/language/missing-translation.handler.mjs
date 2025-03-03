import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service gets invoked when a translation could not be found. The moment the application got refactored to use
 * synchronous data loading via @link APP_INITIALIZER, we want to know about every translation event that could not
 * get executed successfully. So we inform the backend about the event to persist this information. To avoid backend
 * flooding, we count each of the xhr requests fired for missing translations and stop at some point.
 */
export class LogMissingTranslationHandler {
    constructor() {
        this.maxBackendCalls = 5;
        this.backendCallsRemaining = this.maxBackendCalls;
    }
    /**
     * @param params MissingTranslationHandlerParams - Contains information about the untranslatable key and its service.
     * @returns string For now we indicate the missing of a translation just by informing user and logs about it.
     */
    handle(params) {
        if (this.backendCallsRemaining > 0) {
            this.backendCallsRemaining--;
            const body = JSON.stringify({ level: 'warn', message: `Missing translation for key ${params.key}` });
            console.log(body);
        }
        else {
            console.log(`As we did already sent ${this.maxBackendCalls} requests to backend we stop from now on to avoid flooding.`);
        }
        return `${params.key} TRANSLATION_MISSING`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: LogMissingTranslationHandler, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: LogMissingTranslationHandler }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: LogMissingTranslationHandler, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2luZy10cmFuc2xhdGlvbi5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWxsaWFuemNoL25neC1jb3JlLWNoL3NyYy9saWIvbGFuZ3VhZ2UvbWlzc2luZy10cmFuc2xhdGlvbi5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDOzs7OztHQUtHO0FBRUgsTUFBTSxPQUFPLDRCQUE0QjtJQUR6QztRQUVtQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUM3QiwwQkFBcUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0tBZ0J0RDtJQWRDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxNQUF1QztRQUM1QyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLCtCQUErQixNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLElBQUksQ0FBQyxlQUFlLDZEQUE2RCxDQUFDLENBQUM7U0FDMUg7UUFDRCxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsc0JBQXNCLENBQUM7SUFDN0MsQ0FBQzs4R0FqQlUsNEJBQTRCO2tIQUE1Qiw0QkFBNEI7OzJGQUE1Qiw0QkFBNEI7a0JBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogU2VydmljZSBnZXRzIGludm9rZWQgd2hlbiBhIHRyYW5zbGF0aW9uIGNvdWxkIG5vdCBiZSBmb3VuZC4gVGhlIG1vbWVudCB0aGUgYXBwbGljYXRpb24gZ290IHJlZmFjdG9yZWQgdG8gdXNlXG4gKiBzeW5jaHJvbm91cyBkYXRhIGxvYWRpbmcgdmlhIEBsaW5rIEFQUF9JTklUSUFMSVpFUiwgd2Ugd2FudCB0byBrbm93IGFib3V0IGV2ZXJ5IHRyYW5zbGF0aW9uIGV2ZW50IHRoYXQgY291bGQgbm90XG4gKiBnZXQgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBTbyB3ZSBpbmZvcm0gdGhlIGJhY2tlbmQgYWJvdXQgdGhlIGV2ZW50IHRvIHBlcnNpc3QgdGhpcyBpbmZvcm1hdGlvbi4gVG8gYXZvaWQgYmFja2VuZFxuICogZmxvb2RpbmcsIHdlIGNvdW50IGVhY2ggb2YgdGhlIHhociByZXF1ZXN0cyBmaXJlZCBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMgYW5kIHN0b3AgYXQgc29tZSBwb2ludC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXhCYWNrZW5kQ2FsbHMgPSA1O1xuICBwcml2YXRlIGJhY2tlbmRDYWxsc1JlbWFpbmluZyA9IHRoaXMubWF4QmFja2VuZENhbGxzO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gcGFyYW1zIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMgLSBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdW50cmFuc2xhdGFibGUga2V5IGFuZCBpdHMgc2VydmljZS5cbiAgICogQHJldHVybnMgc3RyaW5nIEZvciBub3cgd2UgaW5kaWNhdGUgdGhlIG1pc3Npbmcgb2YgYSB0cmFuc2xhdGlvbiBqdXN0IGJ5IGluZm9ybWluZyB1c2VyIGFuZCBsb2dzIGFib3V0IGl0LlxuICAgKi9cbiAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuYmFja2VuZENhbGxzUmVtYWluaW5nID4gMCkge1xuICAgICAgdGhpcy5iYWNrZW5kQ2FsbHNSZW1haW5pbmctLTtcbiAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IGxldmVsOiAnd2FybicsIG1lc3NhZ2U6IGBNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXkgJHtwYXJhbXMua2V5fWAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYEFzIHdlIGRpZCBhbHJlYWR5IHNlbnQgJHt0aGlzLm1heEJhY2tlbmRDYWxsc30gcmVxdWVzdHMgdG8gYmFja2VuZCB3ZSBzdG9wIGZyb20gbm93IG9uIHRvIGF2b2lkIGZsb29kaW5nLmApO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cGFyYW1zLmtleX0gVFJBTlNMQVRJT05fTUlTU0lOR2A7XG4gIH1cbn1cbiJdfQ==