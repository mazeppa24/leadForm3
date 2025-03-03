import { NgModule } from '@angular/core';

// Core Ch
import { NgxCoreComponentsModule } from '@allianzch/ngx-core-ch';

const EXPORTED_MODULES = [
  NgxCoreComponentsModule,
];

@NgModule({
  imports: [
    ...EXPORTED_MODULES
  ],
  exports: [
    ...EXPORTED_MODULES
  ]
})
export class NdbxSharedModuleCustom {
}
