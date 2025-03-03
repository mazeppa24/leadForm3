import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/**
 * Service gets invoked when a translation could not be found. The moment the application got refactored to use
 * synchronous data loading via @link APP_INITIALIZER, we want to know about every translation event that could not
 * get executed successfully. So we inform the backend about the event to persist this information. To avoid backend
 * flooding, we count each of the xhr requests fired for missing translations and stop at some point.
 */
export declare class LogMissingTranslationHandler implements MissingTranslationHandler {
    private readonly maxBackendCalls;
    private backendCallsRemaining;
    /**
     * @param params MissingTranslationHandlerParams - Contains information about the untranslatable key and its service.
     * @returns string For now we indicate the missing of a translation just by informing user and logs about it.
     */
    handle(params: MissingTranslationHandlerParams): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogMissingTranslationHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogMissingTranslationHandler>;
}
