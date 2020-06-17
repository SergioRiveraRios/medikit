import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsPage,
    children:[
      {
        path: 'new-doctor',
        loadChildren: () => import('../pages/new-medic/new-medic-routing.module').then(m => m.NewMedicPageRoutingModule)
      },
      {
        path: 'view-doctors',
        loadChildren: () => import('../pages/view-doctors/view-doctors-routing.module').then(m => m.ViewDoctorsPageRoutingModule)
      },
      {
        path: 'admin-patients',
        loadChildren: () => import('../pages/admin-patients/admin-patients-routing.module').then(m => m.AdminPatientsPageRoutingModule)
      },
      {
        path: 'admin-home',
        loadChildren: () => import('../pages/admin-home/admin-home-routing.module').then(m => m.AdminHomePageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/admin-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:  '/tabs/admin-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTabsPageRoutingModule {}
