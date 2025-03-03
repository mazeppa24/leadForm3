import { Component } from "@angular/core";
import { LeadFormComponent } from "../lead-form/lead-form.component";
import {ProfileImageComponent} from "../profile-image/profile-image.component";
import {NxColComponent, NxLayoutComponent, NxRowComponent} from "@aposin/ng-aquila/grid";

@Component({
  selector: "app-lead-form-host",
  standalone: true,
  imports: [LeadFormComponent, ProfileImageComponent, NxRowComponent, NxColComponent, NxLayoutComponent],
  templateUrl: "./lead-form-host.component.html",
  styleUrl: "./lead-form-host.component.scss",
})
export class LeadFormHostComponent {}
