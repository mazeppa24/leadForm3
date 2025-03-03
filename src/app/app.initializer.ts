import { AppConfigService } from './core/app-config/app-config.service';

export function appInitializer(appService: AppConfigService): any {
  return () => appService.load();
}
