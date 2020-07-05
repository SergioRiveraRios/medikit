import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Doctor} from 'src/app/doctorModel/doctor'
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private firestore:AngularFirestore) { }

  newDoctor(doctor: Doctor) {
    this.firestore.collection('doctors').add({
      dom:doctor.dom,
      email:doctor.email,
      idCard:doctor.idCard,
      link:doctor.link,
      name:doctor.name,
      password:doctor.password,
      telephone:doctor.telephone,
      blood:doctor.blood,
      sex:doctor.sex
    })
    console.log('Registro exitoso')
  }
  getDoctors(){
    return this.firestore.collection('doctors').snapshotChanges();
  }
  deleteDoctor(doctorID:string){
    this.firestore.collection('doctors').doc(doctorID).delete();
  }

  
}
