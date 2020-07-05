import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'
import { Patient } from 'src/app/models/patient/patient';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private firestore:AngularFirestore,
              public auser: AngularFireAuth) { }
  
  deletePatient(patientID:string){
    this.firestore.collection('patient').doc(patientID).delete();
  }

  editPatient(patient:Patient){
    this.firestore.collection('patient').doc(patient.id).update(patient);
  }

  getPatients(){
    return this.firestore.collection('patient').snapshotChanges();
  }
  newPatient(patient: Patient, doctor: string) {
    this.auser.createUserWithEmailAndPassword(patient.email, patient.password).then(cred => {
      return this.firestore.collection('patient').doc(cred.user.uid).set({ 
      name:patient.name,        // nombre
      age:patient.age,         // edad
      sex:patient.sex,        // Hombre,Mujer, Otro:espesificar
      height:patient.height,      // altura
      weight:patient.weight,      // peso
      civil:patient.civil,       // estado civil
      origin:patient.origin,    // Lugar de origen
      dom:patient.dom,         // Domicilio actual
      telephone:patient.telephone,   // telefono actual
      blood:patient.blood,  // alergias
      email:patient.email, 
      password:patient.password, 
      medic:doctor,
      link:patient.link
      })
    })
  }

  getPatient(doctorID: string) {
    return this.firestore.collection('patient',
      ref => ref.where('medic', '==', doctorID)).snapshotChanges()
  }
}
