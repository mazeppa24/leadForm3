import { NgModule, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InitialAppParamsService } from "src/app/modules/initial-app-params/initial-app-params.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [InitialAppParamsService],
})
export class InitialAppParamsModule {
  initialAppParamsService = inject(InitialAppParamsService);
}
