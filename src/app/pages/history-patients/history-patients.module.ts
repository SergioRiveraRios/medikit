import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPatientsPageRoutingModule } from './history-patients-routing.module';

import { HistoryPatientsPage } from './history-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPatientsPageRoutingModule
  ],
  declarations: [HistoryPatientsPage]
})
export class HistoryPatientsPageModule {}
