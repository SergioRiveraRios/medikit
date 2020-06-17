import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientMedicalConsultsPage } from './patient-medical-consults.page';

const routes: Routes = [
  {
    path: '',
    component: PatientMedicalConsultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientMedicalConsultsPageRoutingModule {}
