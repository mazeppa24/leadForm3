import {Component} from '@angular/core';
import {NxFooterComponent, NxFooterNavigationDirective} from "@aposin/ng-aquila/footer";
import {environment} from "../../../environments/environment";
import {NxCopytextComponent} from "@aposin/ng-aquila/copytext";
import {NxIconComponent} from "@aposin/ng-aquila/icon";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NxFooterComponent,
    NxFooterNavigationDirective,
    NxCopytextComponent,
    NxIconComponent,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly environment = environment;
}
