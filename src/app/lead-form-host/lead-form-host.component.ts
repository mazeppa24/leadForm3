import { Component, OnInit, inject, signal, computed, effect } from '@angular/core';
import { NxColComponent, NxLayoutComponent, NxRowComponent } from "@aposin/ng-aquila/grid";
import { LeadFormComponent } from "../lead-form/lead-form.component";
import { ProfileImageComponent } from "../profile-image/profile-image.component";
import { InitialAppParamsService } from "../core/services/initial-app-params/initial-app-params.service";
import { ImageProfileService, ImageProfileResult } from "../core/services/profile-image/image-profile.service";


@Component({
  selector: "app-lead-form-host",
  standalone: true,
  imports: [LeadFormComponent, ProfileImageComponent, NxRowComponent, NxColComponent, NxLayoutComponent],
  templateUrl: "./lead-form-host.component.html",
  styleUrl: "./lead-form-host.component.scss",
})
export class LeadFormHostComponent implements OnInit {

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
        console.log("effect decodedEmail", this.decodedEmail());
        this.profileImageData.set(await this.imageProfileService.fetchKbImageLink(this.decodedEmail()))
      }
    });
  }
  
  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
