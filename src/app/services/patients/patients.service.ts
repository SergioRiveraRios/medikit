import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'
import { Patient } from 'src/app/models/patient/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private firestore:AngularFirestore) { }
  
  deletePatient(patientID:string){
    this.firestore.collection('patient').doc(patientID).delete();
  }

  editPatient(patient:Patient){
    this.firestore.collection('patient').doc(patient.id).update(patient);
  }

  getPatients(){
    return this.firestore.collection('patient').snapshotChanges();
  }
}
