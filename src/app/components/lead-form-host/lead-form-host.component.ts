import { Component, OnInit, inject, signal, computed, effect } from '@angular/core';
import { NxColComponent, NxLayoutComponent, NxRowComponent } from "@aposin/ng-aquila/grid";
import { LeadFormComponent } from "../lead-form/lead-form.component";
import { ProfileImageComponent } from "../profile-image/profile-image.component";
import { InitialAppParamsService } from "../../core/services/initial-app-params/initial-app-params.service";
import { ImageProfileService, ImageProfileResult } from "../../core/services/profile-image/image-profile.service";


@Component({
  selector: "app-lead-form-host",
  standalone: true,
  imports: [LeadFormComponent, ProfileImageComponent, NxRowComponent, NxColComponent, NxLayoutComponent],
  templateUrl: "./lead-form-host.component.html",
  styleUrl: "./lead-form-host.component.scss",
})
export class LeadFormHostComponent {

  // services
  private initialAppParamsService = inject(InitialAppParamsService);
  private imageProfileService = inject(ImageProfileService);

  // signals
  protected profileImageData = signal(new ImageProfileResult());
  protected isPayedMedia = signal<boolean>(false);

  // leadByYou lead with email
  decodedEmail = computed(() =>
    this.initialAppParamsService.initialAppParams()?.preselectedEmail || "",
  );

  // payd media variant (sea or display)
  paydMediaCampaign = computed(() => {
    return this.initialAppParamsService.initialAppParams()?.campaignSource || ""
  });

  constructor() {
    // effect to fetch the profile image
    effect(async () => {
      if (this.decodedEmail()) {
        console.log("effect decodedEmail", this.decodedEmail());
        this.profileImageData.set(await this.imageProfileService.fetchKbImageLink(this.decodedEmail()))
      }
    });

    // effect to set the payd media variant (sc= sea or display)
    effect(() => {
      const initialized = this.initialAppParamsService.isInitialized();
      if (!initialized) {
        console.log("EFFECT - Not initialized yet, returning");
        return;
      }
      const campaign = this.initialAppParamsService.initialAppParams()?.campaignSource || "";

      if (campaign == 'sea' || campaign == 'display') {
        this.isPayedMedia.set(true);
      } else {
        this.isPayedMedia.set(false);
      }
    }, { allowSignalWrites: true });
  }

  /* FIRST Version
  getFormColumnWidth(): string {
    if (this.isPayedMedia()) {
      // Narrower width for payd variant
      return '12, 12, 12, 8';
    } else if (this.profileImageData().imageUrl.length > 10) {
      // Original width when profile image is present
      return '12, 12, 12, 8';
    } else {
      // Original width when no profile image
      return '12, 12, 10, 8';
    }
  }
  */

  getFormColumnWidth(): string {
    if (this.isPayedMedia()) {
      // Narrower width for payd variant
      return '12, 12, 12, 6';
    } else if (this.profileImageData().imageUrl.length > 10) {
      // Original width when profile image is present
      return '12, 12, 12, 8';
    } else {
      // Original width when no profile image
      return '12, 12, 10, 8';
    }
  }

  getFormColumnOffset(): string {
    if (this.isPayedMedia()) {
      // no offset, empty column takes space
      return '0';
    } else if (this.profileImageData().imageUrl.length > 10) {
      // original offset when profile image is present
      return '0';
    } else {
      // original offset when no profile image or payd variant
      return '0, 0, 1, 2';
    }
  }
}
