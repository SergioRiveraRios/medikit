import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./pages/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'view-patients',
    loadChildren: () => import('./pages/view-patients/view-patients.module').then( m => m.ViewPatientsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-patient',
    loadChildren: () => import('./pages/detail-patient/detail-patient.module').then( m => m.DetailPatientPageModule)
  },
  {
    path: 'new-appointment',
    loadChildren: () => import('./pages/new-appointment/new-appointment.module').then( m => m.NewAppointmentPageModule)
  },
  {
    path: 'new-medic',
    loadChildren: () => import('./pages/new-medic/new-medic.module').then( m => m.NewMedicPageModule)
  },
  {
    path: 'patient-home',
    loadChildren: () => import('./pages/patient-home/patient-home.module').then( m => m.PatientHomePageModule)
  },
  {
    path: 'view-appointments',
    loadChildren: () => import('./pages/view-appointments/view-appointments.module').then( m => m.ViewAppointmentsPageModule)
  },
  {
    path: 'new-medical-consult',
    loadChildren: () => import('./pages/new-medical-consult/new-medical-consult.module').then( m => m.NewMedicalConsultPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./pages/userhome/userhome.module').then( m => m.UserhomePageModule)
  },
  {
    path: 'edit-appointment',
    loadChildren: () => import('./pages/edit-appointment/edit-appointment.module').then( m => m.EditAppointmentPageModule)
  },
  {
    path: 'new-medical-consult',
    loadChildren: () => import('./pages/new-medical-consult/new-medical-consult.module').then( m => m.NewMedicalConsultPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
