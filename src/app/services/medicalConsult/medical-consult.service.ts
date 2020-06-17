import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class MedicalConsultService {

  constructor(private firestore:AngularFirestore) { }

  getPatientConsults(patientID: string){
    return this.firestore.collection('MedicalConsult',
     ref=>ref.where('patientID', '==', patientID)).snapshotChanges()
  }

  deletePatientConsults(patientID:string){
    this.firestore.collection('MedicalConsult').doc(patientID).delete();
  }
}
