import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPatientsPage } from './history-patients.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPatientsPageRoutingModule {}
