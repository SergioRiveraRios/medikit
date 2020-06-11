import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private firestore:AngularFirestore) { }

  getUserData(userID:string){
    return this.firestore.collection('doctors').doc(userID).snapshotChanges();
  }
}
