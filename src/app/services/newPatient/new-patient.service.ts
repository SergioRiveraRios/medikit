import { Injectable, ReflectiveKey } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Patient } from 'src/app/models/patient/patient'
import { Doctor } from 'src/app/doctorModel/doctor'
@Injectable({
  providedIn: 'root'
})
export class NewPatientService {
  public isLogged: any = false;
  public currentDoctor: string;
  public uid: ReflectiveKey;
  constructor(private firestore: AngularFirestore, public auser: AngularFireAuth) {

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
}
