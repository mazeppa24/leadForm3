import { HttpClientService } from '../services/http-service/http-client-service';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config/app-config.service';
/**
 * Factory for the http service. Returns a concrete implementation of the {@link HttpClientService} depending on the environment.
 * As this class has dependencies,
 * we have to make sure that these dependencies are met in different factories before providing this service.
 * Because of {@link APP_INITIALIZER} and provisioning of custom interdependent services this topic is quite complex...
 * @param HttpClient httpClient
 * @param AppConfigService appConfigService
 * @returns HttpClientService
 */
export declare function httpServiceFactory(httpClient: HttpClient, appConfigService: AppConfigService): HttpClientService;
