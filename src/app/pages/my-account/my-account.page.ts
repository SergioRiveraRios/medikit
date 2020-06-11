import { Component, OnInit } from '@angular/core';
import {Doctor} from 'src/app/doctorModel/doctor'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { MyAccountService } from 'src/app/services/myAccount/my-account.service'
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  public doctor: Doctor;
  public isLogged: any = false;
  public userId: string;
  constructor(private firestore: AngularFirestore,
              private auser: AngularFireAuth,
              private accountService: MyAccountService) {
                this.getCurrentUser();
               }

  ngOnInit() {
  }
  getCurrentUser(){
    this.doctor = JSON.parse(localStorage.getItem('myData')) as Doctor;
    console.log("Did data load in appointment : ", this.doctor);
  }
}
