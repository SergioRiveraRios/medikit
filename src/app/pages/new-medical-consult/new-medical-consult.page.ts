import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

import {MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NewMedicalConsultService} from 'src/app/services/newMedicalConsult/new-medical-consult.service' 
import { Appointment } from 'src/app/models/appointment/appointment';
import {AppointmentsService } from 'src/app/services/Appointments/appointments.service'
@Component({
  selector: 'app-new-medical-consult',
  templateUrl: './new-medical-consult.page.html',
  styleUrls: ['./new-medical-consult.page.scss'],
})
export class NewMedicalConsultPage implements OnInit {
  public medicalConsultation:MedicalConsultation;
  public currentAppointment:Appointment;
  public myForm: FormGroup;
  medicamentos: string[] = new Array();
  constructor(private actrouter: ActivatedRoute,
              private form: FormBuilder,
              private MedicalService: NewMedicalConsultService,
              private appointmentService: AppointmentsService) { 
    
    this.getAppointment();
  }

  ngOnInit() {
    this.validations();
  }
  validations() {
    this.myForm = this.form.group({
      descrip: ['', Validators.compose([
        Validators.required
      ])],
      medicaments: ['', Validators.compose([
        Validators.required
      ])]
    });
  }
  getAppointment(){
    this.actrouter.queryParams.subscribe(
      params => {
        this.currentAppointment = JSON.parse(params.special);
        console.log(this.currentAppointment)
      }// params
    ); // actrouter
  }
  addMedicament() {
    this.medicamentos.push(this.myForm.get('medicaments').value);
    this.myForm.get('medicaments').reset();
  }
  setMedical(){
    this.medicalConsultation = {
      idMedic:this.currentAppointment.idMedic,
      idPatient:this.currentAppointment.idPatient,
      idAppointment:this.currentAppointment.id,
      date:this.currentAppointment.date,
      time:this.currentAppointment.time,
      resipe:this.medicamentos,
      patientName:this.currentAppointment.patientName,
      descrip:this.myForm.get('descrip').value
    }
    this.changeAppointmentStatus();
    console.log('bbb',this.medicalConsultation);
    this.MedicalService.newMedical(this.medicalConsultation)
    
  }
  changeAppointmentStatus(){
    this.currentAppointment.status=false;
    this.appointmentService.editAppointment(this.currentAppointment);
  }
  /*setMedical(){
    this.medicalConsult = {
    description:this.myForm.get('descrip').value, 
    treatment: this.medicamentos,   
    date: this.medicalConsult.date,
    appointmentID: this.medicalConsult.idappointment,
    medicID: this.medicalConsult.idMedic,
    patientID: this.medicalConsult.patientID,
    patientName: this.medicalConsult.patientName
    }
    this.MedicalService.newMedical(this.medicalConsult);
  }*/
}
