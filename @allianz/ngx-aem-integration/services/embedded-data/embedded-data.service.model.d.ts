import { CustomConfigurationBase } from './custom-config-base.interface';
import { ContextConfigurationBase } from './context-config-base.interface';
import { Observable } from 'rxjs';
export interface EmbeddedDataServiceInterface<CAAS_T, CUSTOM_T extends CustomConfigurationBase = CustomConfigurationBase, CONTEXT_T extends ContextConfigurationBase = ContextConfigurationBase> {
    ContextConfiguration: CONTEXT_T;
    CustomConfiguration: CUSTOM_T;
    I18n: any;
    Caas: any;
    Language: string;
    Country: string;
    LocaleId: string;
    InstanceId: string;
    getCaaSConfiguration(): Observable<CAAS_T>;
}
