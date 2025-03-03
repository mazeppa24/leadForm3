import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {HomeComponent} from "./modules/demohome/home.component";
import {LeadFormHostComponent} from "./lead-form-host/lead-form-host.component";


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
