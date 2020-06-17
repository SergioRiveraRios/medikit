import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailConsultPage } from './detail-consult.page';

const routes: Routes = [
  {
    path: '',
    component: DetailConsultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailConsultPageRoutingModule {}
