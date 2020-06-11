import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment/appointment';
import { Patient } from 'src/app/models/patient/patient';
import {NewAppointmentService} from 'src/app/services/newAppointment/new-appointment.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.page.html',
  styleUrls: ['./new-appointment.page.scss'],
})
export class NewAppointmentPage implements OnInit {
  public patient: Patient;
  public appointment: Appointment;
  public myForm: FormGroup;
  public isLogged: any = false;
  public userId: string;
  constructor(private actrouter: ActivatedRoute, 
              private router: Router,
              private form: FormBuilder,
              public auser: AngularFireAuth,
              private db: AngularFirestore,
              private appointmentService:NewAppointmentService) {
              this.getPatientData()
    
  } // constructor

  ngOnInit() {
    this.validations();
    this.getCurrentUser();
  }
  validations() {
    this.myForm = this.form.group({
      date: ['', Validators.compose([
        Validators.required
      ])],
      descrip: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  newAppointment(){
    this.createAppointment();
    this.appointmentService.newAppointment(this.appointment);
  }
  getCurrentUser(){

    if(this.isLogged){
      console.log("usuario ya logeado")
      console.log(this.userId);
    }else{
      this.auser.authState.subscribe( user => {
        if (user) { 
          this.userId = user.uid
          console.log(this.userId);
          this.isLogged=true;
        }
      });
    }
  }
  getPatientData(){
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special);
      } // params
    ); // actrouter
  }
  createAppointment(){
    this.appointment={
      idMedic: this.userId,
      idPatient: this.patient.id,
      patientName:this.patient.name,
      date:'123123'
    }
  }
}
