import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { NavigationExtras, Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

import { Doctor } from 'src/app/doctorModel/doctor'
import {ViewpatientsService} from 'src/app/services/viewpatients/viewpatients.service'
@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.page.html',
  styleUrls: ['./view-patients.page.scss'],
})
export class ViewPatientsPage implements OnInit {
  public patients: Patient[] ;
  public isLogged: any = false;
  public  userId:string;
  constructor(private router: Router,
              public auser: AngularFireAuth,
              private db: AngularFirestore,
              private viewService: ViewpatientsService) {
  }
  ngOnInit() {
    if(this.isLogged){
      console.log("usuario ya logeado")
      console.log(this.userId);
      this.getpatientsCollection(this.userId);
    }else{
      this.auser.authState.subscribe( user => {
        if (user) { 
          this.userId = user.uid
          console.log(this.userId);
          this.isLogged=true;
          this.getpatientsCollection(this.userId);
        }
      });
    }
    
  }
  viewPatient(patient: Patient): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['../detail-patient'], extras);
  }

  newPatient() {
    this.router.navigate(['../add-patient']);
  }
  getpatientsCollection(doctorID:string){
    this.viewService.getPatient(doctorID).subscribe(data => {
        this.patients = data.map(e => {
          return{
            id: e.payload.doc.id,
            ...e.payload.doc.data(),
          } as Patient;
        })
      });
  }
}
