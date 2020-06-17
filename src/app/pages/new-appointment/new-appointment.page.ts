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
  appointmentDate:Date;
  appointmentTime:Date;
  constructor(private actrouter: ActivatedRoute, 
              private router: Router,
              private form: FormBuilder,
              public auser: AngularFireAuth,
              private db: AngularFirestore,
              private appointmentService:NewAppointmentService) {
              
    
  } // constructor

  ngOnInit() {
    this.validations();
    this.getPatientData()
  }
  validations() {
    this.myForm = this.form.group({
      date: ['', Validators.compose([
        Validators.required
      ])],
      time: ['', Validators.compose([
        Validators.required
      ])],
      descrip: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  newAppointment(){
    this.createAppointment();
    console.log(this.appointment)/*
    this.appointmentService.newAppointment(this.appointment);
    console.log('mmm')*/
  }
  getPatientData(){
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special) as Patient;
      } // params
    ); // actrouter
  }
  createAppointment(){
    this.getDate();
    this.appointment = {
      idMedic: this.patient.medic,
      idPatient: this.patient.id,
      patientName:this.patient.name,
      date:this.appointmentDate.getDate()+'-'+
           (this.appointmentDate.getMonth()+1)+'-'+
           this.appointmentDate.getFullYear(),
      time:this.appointmentTime.getHours()+':'+
            this.appointmentTime.getMinutes(),
      status:true,
      cancelled:false
    }
    this.appointmentService.newAppointment(this.appointment);
    this.router.navigate(['/tabs/view-patients'])
  }

  getDate(){
    this.appointmentDate=new Date(this.myForm.get('date').value);
    this.appointmentTime=new Date(this.myForm.get('time').value);
    }
}
