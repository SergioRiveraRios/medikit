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

  async signInEmail(email:string,pass:string) {
    return await this.auser.signInWithEmailAndPassword(email,pass)
      .catch(function (error) {
        console.log(error)
      })
  }
  
}

