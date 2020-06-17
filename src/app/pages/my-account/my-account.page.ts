import { Component, OnInit } from '@angular/core';
import {Doctor} from 'src/app/doctorModel/doctor'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { MyAccountService } from 'src/app/services/myAccount/my-account.service'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
              public toastController: ToastController,
              private router:Router) {
                this.getCurrentUser();
               }

  ngOnInit() {
  }
  getCurrentUser(){
    this.doctor = JSON.parse(localStorage.getItem('myData')) as Doctor;
    console.log("Did data load in appointment : ", this.doctor);
  }
  async logout(){
    await this.presentToast();
    this.router.navigate(['login'])
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sesión cerrada',
      duration: 500
    });
    toast.present();
  }
  
}
