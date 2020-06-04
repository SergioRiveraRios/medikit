import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

import { AngularFireDatabase } from '@angular/fire/database'
import { Appointment } from 'src/app/models/appointment/appointment';
import {ViewAppointmentsService} from 'src/app/services/viewAppointments/view-appointments.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.page.html',
  styleUrls: ['./view-appointments.page.scss'],
})
export class ViewAppointmentsPage implements OnInit {
  public isLogged: any = false;
  public userId: string;
  public appointments: Appointment[];
  constructor(public auser: AngularFireAuth,
              public db: AngularFireDatabase, 
              public firestore: AngularFirestore,
              private viewAppointService: ViewAppointmentsService,
              private router:Router,
              public alertController: AlertController) { }

  
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    if (this.isLogged) {
      console.log("usuario ya logeado");
      console.log(this.userId);
      this.getDoctorAppointment(this.userId)
    } else {
      this.auser.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid
          console.log(this.userId);
          this.isLogged = true;
          this.getDoctorAppointment(this.userId)
        }
      });
    }
  }
  
  getDoctorAppointment(userID:string){
    this.viewAppointService.getDoctorAppointments(userID).subscribe(
      data => {
        this.appointments = data.map(e => {
          return{
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Appointment;
        })
      });
  }
  
  newMedicalConsult(){
      this.router.navigate(['./new-medical-consult']);
    }
    async presentAlertMultipleButtons() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Editar',
          role:'edit',
          handler: () => {
            console.log('Confirm Okay');
          }
        },{
          text: 'Confirmar',
          role:'confirm',
          handler: () => {
            console.log('Confirm Okay');
          }
        }]
      });
  
      await alert.present();
    }


}
