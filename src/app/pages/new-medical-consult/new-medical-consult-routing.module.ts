import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMedicalConsultPage } from './new-medical-consult.page';

const routes: Routes = [
  {
    path: '',
    component: NewMedicalConsultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMedicalConsultPageRoutingModule {}
