import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class MedicalConsultService {

  constructor(private firestore:AngularFirestore) { }

  getPatientConsults(patientID){
    return this.firestore.collection('MedicalConsult',
     ref=>ref.where('patientID', '==', patientID)).snapshotChanges()
  }
}
