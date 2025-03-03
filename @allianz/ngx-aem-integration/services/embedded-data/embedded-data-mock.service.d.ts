import { Observable } from 'rxjs';
import { ContextConfigurationBase } from './context-config-base.interface';
import { CustomConfigurationBase } from './custom-config-base.interface';
import { EmbeddedDataServiceInterface } from './embedded-data.service.model';
import * as i0 from "@angular/core";
export declare class EmbeddedDataMockService<CAAS_T, CUSTOM_T extends CustomConfigurationBase = CustomConfigurationBase, CONTEXT_T extends ContextConfigurationBase = ContextConfigurationBase> implements EmbeddedDataServiceInterface<CAAS_T, CUSTOM_T, CONTEXT_T> {
    get ContextConfiguration(): CONTEXT_T;
    get CustomConfiguration(): CUSTOM_T;
    get I18n(): any;
    get Caas(): any;
    get Language(): string;
    get Country(): string;
    get LocaleId(): string;
    get InstanceId(): string;
    getCaaSConfiguration(): Observable<CAAS_T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmbeddedDataMockService<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmbeddedDataMockService<any, any, any>>;
}
