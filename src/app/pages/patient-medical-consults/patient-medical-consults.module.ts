import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientMedicalConsultsPageRoutingModule } from './patient-medical-consults-routing.module';

import { PatientMedicalConsultsPage } from './patient-medical-consults.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientMedicalConsultsPageRoutingModule
  ],
  declarations: [PatientMedicalConsultsPage]
})
export class PatientMedicalConsultsPageModule {}
