import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireDatabase} from '@angular/fire/database'

import { Appointment } from 'src/app/models/appointment/appointment';
import { Patient } from 'src/app/models/patient/patient';
@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentsService {

  constructor(private firestore:AngularFirestore,private db:AngularFireDatabase) { }
  public appoint:Appointment[];

  getDoctorAppointments(doctorID: string) {
     return this.firestore.collection('appointment',
     ref=>ref.where('idMedic', '==', doctorID).where('status','==',true)).snapshotChanges()
  }
  
  getPatientAppointments(patientID:string){
    return this.firestore.collection('appointment',
     ref=>ref.where('idPatient', '==', patientID)).snapshotChanges()
  }
}
