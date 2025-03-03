import { Injector } from '@angular/core';
import { MessageService } from '../services/message-service/message-service';
/**
 * As this class is necessary for {@link HttpClientService}, we have to make
 * sure to provide it early enough so all dependencies are resolved correctly.
 * We have to take care in this case only because of {@link APP_INITIALIZER} and
 * provisioning of custom interdependent services - quite complex topic!
 * @param Injector injector - We need to avoid cyclic dependencies,
 * so we pass the injector directly and the service can get the {@link Router} from it when necessary
 * @returns MessageService
 */
export declare function messageServiceFactory(injector: Injector): MessageService;
