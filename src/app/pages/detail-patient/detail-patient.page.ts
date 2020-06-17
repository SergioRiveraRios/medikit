import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import {Patient} from 'src/app/models/patient/patient';
import {PatientsService} from 'src/app/services/patients/patients.service';
import {AppointmentsService} from 'src/app/services/Appointments/appointments.service'
@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.page.html',
  styleUrls: ['./detail-patient.page.scss'],
})
export class DetailPatientPage implements OnInit {
  patient: Patient;
  constructor(private actrouter: ActivatedRoute, 
              private router: Router , 
              private patientService:PatientsService,
              private appointService:AppointmentsService) {
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special);
      }// params
    ); // actrouter
  }// constructor
  ngOnInit() {
    
  }
  newAppointment(patient: Patient): void{
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['../new-appointment'], extras);
  }
  editPatient(patient: Patient){
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['/edit-patient'], extras);
  }
  deletePatient(patient: Patient){
    this.patientService.deletePatient(patient.id);
    this.appointService.deletePatientAppointments(patient.id);
    console.log("borrado")
  }
}
