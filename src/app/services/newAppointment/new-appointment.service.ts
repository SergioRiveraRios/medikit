import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Appointment } from 'src/app/models/appointment/appointment'
@Injectable({
  providedIn: 'root'
})
export class NewAppointmentService {

  constructor(private firestore: AngularFirestore) { }

  newAppointment(newAppointment: Appointment) {
    this.firestore.collection('appointment').add({
      idMedic: newAppointment.idMedic,
      idPatient: newAppointment.idPatient,
      date: newAppointment.date,
      patientName:newAppointment.patientName
    })
  }
}
