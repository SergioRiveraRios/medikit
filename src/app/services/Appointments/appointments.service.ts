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
  deletePatientAppointments(patient:string){
    this.firestore.collection('appointment').doc(patient).delete();
  }
  getDoctorAppointments(doctorID: string) {
    return this.firestore.collection('appointment',
    ref=>ref.where('idMedic', '==', doctorID).where('status','==',true)).snapshotChanges()
 }
 
 getPatientAppointments(patientID:string){
   return this.firestore.collection('appointment',
    ref=>ref.where('idPatient', '==', patientID)).snapshotChanges()
 }

 newAppointment(newAppointment: Appointment) {
  this.firestore.collection('appointment').add({
    idMedic: newAppointment.idMedic,
    idPatient: newAppointment.idPatient,
    date: newAppointment.date,
    time:newAppointment.time,
    patientName:newAppointment.patientName,
    status:true
  })
  console.log('ada')
}
}
