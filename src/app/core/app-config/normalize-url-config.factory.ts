import { NormalizeUrlServiceConfig } from '@allianz/ngx-aem-integration/services/normalize-url/normalize-url.service';
import { AppConfigService } from './app-config.service';
import {environment} from "../../../environments/environment";

export function normalizeUrlConfigFactory(
  appConfigService: AppConfigService
): NormalizeUrlServiceConfig {
  const config: NormalizeUrlServiceConfig = {
    deployUrl: environment.deployUrl
  };
  return config;
}

