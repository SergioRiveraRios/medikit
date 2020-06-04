import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class ViewpatientsService {

  constructor(private firestore: AngularFirestore) { }

  getPatient(doctorID: string) {
    return this.firestore.collection('patient',
      ref => ref.where('medic', '==', doctorID)).snapshotChanges()
  }
}
