import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginPage} from 'src/app/pages/login/login.page'
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'view-patients',
        loadChildren: () => import('../pages/view-patients/view-patients.module').then(m => m.ViewPatientsPageModule)
      },
      {
        path: 'view-appointments',
        loadChildren: () => import('../pages/view-appointments/view-appointments.module').then(m => m.ViewAppointmentsPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('../pages/my-account/my-account-routing.module').then(m => m.MyAccountPageRoutingModule)
      },
      {
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
