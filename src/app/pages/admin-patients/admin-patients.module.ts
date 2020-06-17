import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPatientsPageRoutingModule } from './admin-patients-routing.module';

import { AdminPatientsPage } from './admin-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPatientsPageRoutingModule
  ],
  declarations: [AdminPatientsPage]
})
export class AdminPatientsPageModule {}
