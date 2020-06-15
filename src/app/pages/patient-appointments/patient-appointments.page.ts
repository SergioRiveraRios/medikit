import { Component, OnInit } from '@angular/core';
import {ViewAppointmentsService} from 'src/app/services/viewAppointments/view-appointments.service'
import { Appointment } from 'src/app/models/appointment/appointment';
import { Patient } from 'src/app/models/patient/patient';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.page.html',
  styleUrls: ['./patient-appointments.page.scss'],
})
export class PatientAppointmentsPage implements OnInit {
  public appointments:Appointment[]
  public patient:Patient;
  constructor(private viewAppointService:ViewAppointmentsService,
              private actrouter:ActivatedRoute) { 
                this.getCurrentUser();
  }

  ngOnInit() {
  }
  getCurrentUser(){
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special) as Patient;
        console.log(this.patient.id)
        this.getPatientAppointment(this.patient.id)
      }// params
    ); // actrouter
  }
  getPatientAppointment(patientID: string) {
    this.viewAppointService.getPatientAppointments(patientID).subscribe(
      data => {
        this.appointments = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Appointment;
        })
      });
  }
}