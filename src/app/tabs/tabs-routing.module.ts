import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'add-patient',
        loadChildren: () => import('../pages/add-patient/add-patient.module').then(m => m.AddPatientPageModule)
      },
      {
        path: 'view-patients',
        loadChildren: () => import('../pages/view-patients/view-patients.module').then(m => m.ViewPatientsPageModule)
      },{
        path: '',
        redirectTo: '/tabs/view-patients',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/view-patients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
