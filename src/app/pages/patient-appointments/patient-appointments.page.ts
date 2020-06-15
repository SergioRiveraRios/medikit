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
                this.patient = JSON.parse(localStorage.getItem('myData')) as Patient;
                this.getPatientAppointment(this.patient.id)
  }

  ngOnInit() {
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
