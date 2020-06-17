import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDoctorsPageRoutingModule } from './view-doctors-routing.module';

import { ViewDoctorsPage } from './view-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDoctorsPageRoutingModule
  ],
  declarations: [ViewDoctorsPage]
})
export class ViewDoctorsPageModule {}
