import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/doctorModel/doctor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {PatientsService} from 'src/app/services/patients/patients.service'
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.page.html',
  styleUrls: ['./edit-patient.page.scss'],
})
export class EditPatientPage implements OnInit {
  public myForm: FormGroup;
  public patient: Patient;
  public patientEdit:Patient;
  public patientID:string;
  public doctor: Doctor;
  public url;
  constructor(private form: FormBuilder,
              private actrouter:ActivatedRoute,
              private patientService:PatientsService) { 
    this.getPatientData();
  }

  ngOnInit() {
    this.validations();
  }
  validations() {
    this.myForm = this.form.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ])],
      age: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9][0-9]'),
      ])],
      sex: ['', Validators.compose([
        Validators.required
      ])],
      civil: ['', Validators.compose([
        Validators.required
      ])],
      origin: ['', Validators.compose([
        Validators.required
      ])],
      dom: ['', Validators.compose([
        Validators.required
      ])],
      telephone: ['', Validators.compose([
        Validators.required
      ])],
      family: [''],
      weight: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9][0-9][0-9]'),
      ])],
      height: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9][0-9][0-9]'),
      ])],
      email: ['', Validators.compose([
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')
      ])],
      pass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      blood: ['', Validators.compose([
        Validators.required,
      ])],
      link: ['', Validators.compose([
        Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}')
      ])]
    });
  }
  getPatientData() {
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special) as Patient;
        this.patientID=this.patient.id;
        console.log(this.patient)
      } // params
    ); // actrouter
  }
  changePhoto() {
    this.url = this.myForm.get('link').value
  }
  editPatient(){
    this.patientEdit = {
      name: this.myForm.get('name').value,       // nombre
      age: this.myForm.get('age').value,           // edad
      sex: this.myForm.get('sex').value,         // Hombre,Mujer, Otro:espesificar
      height: this.myForm.get('height').value,      // altura
      weight: this.myForm.get('weight').value,        // peso
      civil: this.myForm.get('civil').value,         // estado civil
      origin: this.myForm.get('origin').value,      // Lugar de origen
      dom: this.myForm.get('dom').value,          // Domicilio actual
      telephone: this.myForm.get('telephone').value,     // telefono actual
      blood: this.myForm.get('blood').value,  // alergias
      email: this.myForm.get('email').value,
      password: this.myForm.get('pass').value,
      idmedic: this.doctor.id,
      link:this.url,
      id:this.patient.id
    }
    this.patientService.editPatient(this.patientEdit);
  }
}
