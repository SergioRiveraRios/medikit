import { Injectable } from '@angular/core';
import { Doctor } from "src/app/doctorModel/doctor"
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as functions from 'firebase-admin'
import * as admin from 'firebase-admin'

/*var serviceAccount = require("/Users/sergioernestoriverarios/Downloads/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://medikit-7e119.firebaseio.com"
}); */
@Injectable({
  providedIn: 'root'
})
export class CreateMedicService {
  doctor: Doctor = new Doctor();
  userID:string;
  constructor(private firestore: AngularFirestore, public auser: AngularFireAuth) { 
  
  }

  createMedic(doctor: Doctor) {
    
    this.auser.createUserWithEmailAndPassword(doctor.email, doctor.pass).then(cred => {
      return this.firestore.collection('doctors').doc(cred.user.uid).set({
        dom: 'asd',
        idCard: '321232232',
        name: 'sergio',
        patients: ['asd'],
        schedule: '5:00',
        telephone: '311231232',
        medic:''
      })
    })
    
  }

  
}
