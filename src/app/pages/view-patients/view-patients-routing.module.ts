import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPatientsPage } from './view-patients.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPatientsPageRoutingModule {}
