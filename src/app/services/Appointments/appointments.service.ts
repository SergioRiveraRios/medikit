import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireDatabase} from '@angular/fire/database'

import { Appointment } from 'src/app/models/appointment/appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  public appoint:Appointment[];
  constructor(private firestore:AngularFirestore) { }

  editAppointment(app:Appointment){
    this.firestore.collection('appointment').doc(app.id).update(app)
  }
  
}
