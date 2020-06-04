import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

import { AngularFireDatabase } from '@angular/fire/database'
import { Appointment } from 'src/app/models/appointment/appointment';
import {ViewAppointmentsService} from 'src/app/services/viewAppointments/view-appointments.service'
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
              private viewAppointService: ViewAppointmentsService) { }

  
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
  


}
