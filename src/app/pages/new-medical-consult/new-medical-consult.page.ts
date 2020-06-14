import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

import {MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NewMedicalConsultService} from 'src/app/services/newMedicalConsult/new-medical-consult.service' 
@Component({
  selector: 'app-new-medical-consult',
  templateUrl: './new-medical-consult.page.html',
  styleUrls: ['./new-medical-consult.page.scss'],
})
export class NewMedicalConsultPage implements OnInit {
  public medicalConsult:MedicalConsultation;
  public myForm: FormGroup;
  medicamentos: string[] = new Array();
  constructor(private actrouter:ActivatedRoute,
    private form: FormBuilder,
    private MedicalService:NewMedicalConsultService) { 
    
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
        this.medicalConsult = JSON.parse(params.special) as MedicalConsultation;
        console.log(this.medicalConsult)
      }// params
    ); // actrouter
  }
  addMedicament() {
    this.medicamentos.push(this.myForm.get('medicaments').value);
    this.myForm.get('medicaments').reset();
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
