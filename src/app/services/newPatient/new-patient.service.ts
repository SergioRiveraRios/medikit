import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Patient } from 'src/app/models/patient/patient'
import {Doctor} from 'src/app/doctorModel/doctor'
@Injectable({
  providedIn: 'root'
})
export class NewPatientService {
  public isLogged: any = false;
  currentDoctor:Doctor;
  constructor(private firestore: AngularFirestore, public auser: AngularFireAuth) {
  }
  
  newPatient(patient: Patient) {
    this.auser.createUserWithEmailAndPassword(patient.email, patient.password).then(cred => {
      return this.firestore.collection('patient').doc(cred.user.uid).set({
        dom: 'asd',
        idCard: '321232232',
        name: 'sergio',
        pass: '123123',
        patients: ['asd'],
        schedule: '5:00',
        telephone: '311231232'
      })
    })

  }
}
