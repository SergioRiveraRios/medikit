import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailConsultPageRoutingModule } from './detail-consult-routing.module';

import { DetailConsultPage } from './detail-consult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailConsultPageRoutingModule
  ],
  declarations: [DetailConsultPage]
})
export class DetailConsultPageModule {}
