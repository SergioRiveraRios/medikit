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
  },
  {
    path: 'patient-appointments',
    loadChildren: () => import('./pages/patient-appointments/patient-appointments.module').then( m => m.PatientAppointmentsPageModule)
  },
  {
    path: 'patient-medical-consults',
    loadChildren: () => import('./pages/patient-medical-consults/patient-medical-consults.module').then( m => m.PatientMedicalConsultsPageModule)
  },
  {
    path: 'patient-tabs',
    loadChildren: () => import('./patient-tabs/patient-tabs.module').then( m => m.PatientTabsPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./pages/admin-home/admin-home.module').then( m => m.AdminHomePageModule)
  },
  {
    path: 'admin-tabs',
    loadChildren: () => import('./admin-tabs/admin-tabs.module').then( m => m.AdminTabsPageModule)
  },
  {
    path: 'new-doctor',
    loadChildren: () => import('./pages/new-medic/new-medic-routing.module').then( m => m.NewMedicPageRoutingModule)
  },
  {
    path: 'view-doctors',
    loadChildren: () => import('./pages/view-doctors/view-doctors.module').then( m => m.ViewDoctorsPageModule)
  },
  {
    path: 'detail-doctor',
    loadChildren: () => import('./pages/detail-doctor/detail-doctor.module').then( m => m.DetailDoctorPageModule)
  },
  {
    path: 'edit-patient',
    loadChildren: () => import('./pages/edit-patient/edit-patient.module').then( m => m.EditPatientPageModule)
  },
  {
    path: 'detail-consult',
    loadChildren: () => import('./pages/detail-consult/detail-consult.module').then( m => m.DetailConsultPageModule)
  },
  {
    path: 'admin-patients',
    loadChildren: () => import('./pages/admin-patients/admin-patients.module').then( m => m.AdminPatientsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
