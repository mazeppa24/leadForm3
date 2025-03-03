import { CurrentUserService } from '../services/user-service/current-user.service';
import { HttpClientService } from '../services/http-service/http-client-service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message-service/message-service';
/**
 * Factory for the current user service. Returns a concrete implementation of the {@link CurrentUserService} depending on the environment.
 * As this class has dependencies,
 * we have to make sure that these dependencies are met in different factories before providing this service.
 * Because of {@link APP_INITIALIZER} and provisioning of custom interdependent services this topic is quite complex...
 * @param HttpClientService httpClientService
 * @param TranslateService translateService
 * @param Router: router
 * @param MsgService: messageService
 * @returns CurrentUserService
 */
export declare function currentUserServiceFactory(httpClientService: HttpClientService, translateService: TranslateService, router: Router, messageService: MessageService): CurrentUserService;
