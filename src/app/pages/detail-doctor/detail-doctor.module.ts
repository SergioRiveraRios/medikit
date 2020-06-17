import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDoctorPageRoutingModule } from './detail-doctor-routing.module';

import { DetailDoctorPage } from './detail-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDoctorPageRoutingModule
  ],
  declarations: [DetailDoctorPage]
})
export class DetailDoctorPageModule {}
