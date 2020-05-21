import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPatientsPageRoutingModule } from './view-patients-routing.module';

import { ViewPatientsPage } from './view-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPatientsPageRoutingModule
  ],
  declarations: [ViewPatientsPage]
})
export class ViewPatientsPageModule {}
