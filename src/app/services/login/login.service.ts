import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public auser: AngularFireAuth, private firestore: AngularFirestore) { }
  getDoctors() {
    return this.firestore.collection('doctors').snapshotChanges();
  }

  getPatients() {
    return this.firestore.collection('patient').snapshotChanges();
  }

  getAdmin(){
    return this.firestore.collection('admin').snapshotChanges();

  }
}
