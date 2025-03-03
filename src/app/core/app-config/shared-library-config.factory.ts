import { AppConfigService } from './app-config.service';
import { AppConfigServiceConfig } from '@allianzch/ngx-core-ch/lib/app-config/app-config-service-config';

export function sharedLibraryConfigFactory(appConfigService: AppConfigService): AppConfigServiceConfig {
  const config: AppConfigServiceConfig = {
    environment: appConfigService.settings.environment,
    apiServerRoot: appConfigService.settings.apiServerRoot,
    baseUrl: appConfigService.settings.baseUrl,
  };

  return config;
}
