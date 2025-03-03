import {PlatformLocation} from "@angular/common"
import {ActivatedRoute} from "@angular/router"
import {TranslateService} from "@ngx-translate/core"
import {defaultFormUrlProviderFactory, FormUrlProvider} from "./core/services/sources/sources.service"

export function formUrlProviderFactory(location: PlatformLocation, translateService: TranslateService, route: ActivatedRoute): FormUrlProvider {
  const defaultProvider = defaultFormUrlProviderFactory(location, translateService)
  return (source, _formName, _sourceId): string => {
    if (route.snapshot.queryParams.sc == "mail") {
      return defaultProvider(source, _formName, _sourceId)
    }
    return location.href
  }
}
