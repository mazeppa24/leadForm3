import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeadFormHostComponent} from "./components/lead-form-host/lead-form-host.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";


// -------- App Pages ---------------------

// -------- End App Pages -----------------

export const appRoutes: Routes = [
  {
    path: '',
    component: LeadFormHostComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LeadFormHostComponent
  },
  {
    path: 'error/:code',
    component: ErrorPageComponent
  },
  {
    path: "**", redirectTo: 'error/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
