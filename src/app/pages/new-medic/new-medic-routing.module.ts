import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMedicPage } from './new-medic.page';

const routes: Routes = [
  {
    path: '',
    component: NewMedicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMedicPageRoutingModule {}
