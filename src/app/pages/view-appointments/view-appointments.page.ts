import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

import { AngularFireDatabase } from '@angular/fire/database'
import { Appointment } from 'src/app/models/appointment/appointment';
import { ViewAppointmentsService } from 'src/app/services/viewAppointments/view-appointments.service'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { Doctor } from 'src/app/doctorModel/doctor';
import {MedicalConsultation} from 'src/app/models/medicalConsultation/medical-consultation'

import { ViewPatientsPage } from 'src/app/pages/view-patients/view-patients.page'
@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.page.html',
  styleUrls: ['./view-appointments.page.scss'],
})
export class ViewAppointmentsPage implements OnInit {
  public isLogged: any = false;
  public userId: string;
  public appointments: Appointment[];
  public doctor: Doctor;
  asd: ViewPatientsPage;
  constructor(public auser: AngularFireAuth,
    public db: AngularFireDatabase,
    public firestore: AngularFirestore,
    private viewAppointService: ViewAppointmentsService,
    private router: Router,
    public alertController: AlertController) {
      this.getCurrentUser();
    
  }

  ngOnInit() {

  }
  getCurrentUser(){
    this.doctor = JSON.parse(localStorage.getItem('myData')) as Doctor;
    console.log("Did data load in appointment : ", this.doctor);
    this.getDoctorAppointment(this.doctor.id)
  }
  getDoctorAppointment(userID: string) {
    this.viewAppointService.getDoctorAppointments(userID).subscribe(
      data => {
        this.appointments = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Appointment;
        })
      });
  }
  async presentAlertMultipleButtons(appointment:Appointment) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Selecciona la opción a realizar',
      buttons: [{
        text: 'Cancelar acción',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Editar Cita',
        role: 'edit',
        handler: () => {
          this.editAppointment(appointment)
        }
      }, {
        text: 'Confirmar Cita',
        role: 'confirm',
        handler: () => {
          console.log('Confirm Okay');
          this.newMedicalConsult(appointment);
        }
      }]
    });

    await alert.present();
  }

  editAppointment(appoint:Appointment): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(appoint)
      }
    };
    this.router.navigate(['/edit-appointment'], extras);
  }
  newMedicalConsult(appointment:Appointment): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(appointment)
      }
    };
    this.router.navigate(['/new-medical-consult'], extras);
  }
  
}
