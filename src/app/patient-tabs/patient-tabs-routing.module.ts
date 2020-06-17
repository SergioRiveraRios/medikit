import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientTabsPage } from './patient-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PatientTabsPage,
    children:[
      {
        path: 'userhome',
        loadChildren: () => import('../pages/userhome/userhome.module').then(m => m.UserhomePageModule)
      },
      {
        path: 'patient-appointments',
        loadChildren: () => import('../pages/patient-appointments/patient-appointments.module').then(m => m.PatientAppointmentsPageModule)
      },
      {
        path: 'patient-medical-consults',
        loadChildren: () => import('../pages/patient-medical-consults/patient-medical-consults.module').then(m => m.PatientMedicalConsultsPageModule)
      },
      {
        path: '',
        redirectTo: '/patient-tabs/userhome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/patient-tabs/userhome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientTabsPageRoutingModule {}
