import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

// Shared Elements
import { ErrorPageComponent } from '../error-page/error-page.component';
import { EmbeddedDataService } from '@allianz/ngx-aem-integration';
import { NdbxSharedModule } from '@allianzch/ngx-core-ch';
import { NdbxSharedModuleCustom } from './ndbx-shared-custom.module';

// -------- Components --------------------
// -------- End Components ----------------

// -------- Pipes -------------------------
// -------- End Pipes --------------------

@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useExisting: EmbeddedDataService,
        deps: [HttpClient, EmbeddedDataService],
      },
    }),
    CommonModule,
    ReactiveFormsModule,
    NdbxSharedModule,
    NdbxSharedModuleCustom,
  ],
  declarations: [ErrorPageComponent],
  exports: [ErrorPageComponent, NdbxSharedModuleCustom, NdbxSharedModule],
  providers: [],
})
export class SharedModule {}
