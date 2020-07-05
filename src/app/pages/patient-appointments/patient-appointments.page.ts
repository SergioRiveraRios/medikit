import { Component, OnInit } from '@angular/core';
import {AppointmentsService} from 'src/app/services/Appointments/appointments.service'
import { Appointment } from 'src/app/models/appointment/appointment';
import { Patient } from 'src/app/models/patient/patient';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.page.html',
  styleUrls: ['./patient-appointments.page.scss'],
})
export class PatientAppointmentsPage implements OnInit {
  public appointments:Appointment[]
  public patient:Patient;
  constructor(private appointmentsService:AppointmentsService,
    public alertController: AlertController,
    public appService:AppointmentsService) { 
                this.patient = JSON.parse(localStorage.getItem('myData')) as Patient;
                this.getPatientAppointment(this.patient.id)
  }
  ngOnInit() {
  }
  getPatientAppointment(patientID: string) {
    this.appointmentsService.getPatientAppointments(patientID).subscribe(
      data => {
        this.appointments = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Appointment;
        })
      });
  }
  
  async presentAlertMultipleButtons(api:Appointment) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Selecciona la opción a realizar',
      buttons: [{
        text: 'Cancelar acción',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Cancelar Cita',
        role: 'edit',
        handler: () => {
          api.cancelled=true;
          api.status=false;
          this.appService.editAppointment(api);
        }
      }]
    });

    await alert.present();
  }
}
