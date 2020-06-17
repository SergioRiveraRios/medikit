import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDoctorsPage } from './view-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDoctorsPageRoutingModule {}
