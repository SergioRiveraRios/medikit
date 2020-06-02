import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMedicPageRoutingModule } from './new-medic-routing.module';

import { NewMedicPage } from './new-medic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMedicPageRoutingModule
  ],
  declarations: [NewMedicPage]
})
export class NewMedicPageModule {}
