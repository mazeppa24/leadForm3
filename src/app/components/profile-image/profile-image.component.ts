import {Component, computed, effect, inject, signal} from '@angular/core';
import {ImageProfileResult, ImageProfileService} from "../../core/services/profile-image/image-profile.service";
import {InitialAppParamsService} from "../../core/services/initial-app-params/initial-app-params.service";
import {TranslateModule} from "@ngx-translate/core";
import {NxFigureComponent} from "@aposin/ng-aquila/image";
import {NxHeadlineComponent} from "@aposin/ng-aquila/headline";

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [
    TranslateModule,
    NxFigureComponent,
    NxHeadlineComponent
  ],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.scss'
})
export class ProfileImageComponent {

  private initialAppParamsService = inject(InitialAppParamsService);
  private imageProfileService = inject(ImageProfileService);


  decodedEmail = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.preselectedEmail || "",
  );

  protected profileImageData = signal(new ImageProfileResult());

  constructor() {
    effect(async () => {
      if (this.decodedEmail()) {
        this.profileImageData.set(await this.imageProfileService.fetchKbImageLink(this.decodedEmail()))
      }
    });
  }


}
