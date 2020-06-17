import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Doctor } from "src/app/doctorModel/doctor"
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public isLogged: any = false;

  constructor(public auser: AngularFireAuth, private firestore: AngularFirestore) {
    
  }
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

