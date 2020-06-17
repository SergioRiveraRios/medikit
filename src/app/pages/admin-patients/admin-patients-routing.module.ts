import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPatientsPage } from './admin-patients.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPatientsPageRoutingModule {}
