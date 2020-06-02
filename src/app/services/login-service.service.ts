import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { Doctor } from "src/app/doctorModel/doctor"

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public isLogged: any = false;

  constructor(public auser: AngularFireAuth, private firestore: AngularFirestore) {
    this.auser.authState.subscribe(user => (this.isLogged = user));
  }

  async signInEmail(user: Doctor) {
    console.log(this.auser.currentUser)
    return await this.auser.signInWithEmailAndPassword(user.email, user.pass)
      .catch(function (error) {
      })
  }
  
}

