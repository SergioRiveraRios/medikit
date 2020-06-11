import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMedicalConsultPageRoutingModule } from './new-medical-consult-routing.module';

import { NewMedicalConsultPage } from './new-medical-consult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMedicalConsultPageRoutingModule
  ],
  declarations: [NewMedicalConsultPage]
})
export class NewMedicalConsultPageModule {}
