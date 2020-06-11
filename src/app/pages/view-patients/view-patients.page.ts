import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'

import { Doctor } from 'src/app/doctorModel/doctor'
import { ViewpatientsService } from 'src/app/services/viewpatients/viewpatients.service'
@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.page.html',
  styleUrls: ['./view-patients.page.scss'],
})
export class ViewPatientsPage implements OnInit {
  public patients: Patient[];
  public isLogged: any = false;
  doctor: Doctor;

  constructor(private router: Router,
              public auser: AngularFireAuth,
              private viewService: ViewpatientsService,
              private actrouter: ActivatedRoute) {
              this.doctor = JSON.parse(localStorage.getItem('myData')) as Doctor;
              console.log("Did data load? : ",this.doctor);
              this.getpatientsCollection(this.doctor.id)
              
  }
  ngOnInit() {

  }
  viewPatient(patient: Patient): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['../detail-patient'], extras);
  }
  viewAppointments(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.doctor)
      }
    };
    this.router.navigate(['/tabs'], extras);
  }
  newPatient() {
    this.router.navigate(['../add-patient']);
  }
  getpatientsCollection(doctorID: string) {
    this.viewService.getPatient(doctorID).subscribe(data => {
      this.patients = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Patient;
      })
    });
  }


}
