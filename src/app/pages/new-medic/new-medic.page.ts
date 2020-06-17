import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { Doctor } from 'src/app/doctorModel/doctor';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NewPatientService } from 'src/app/services/newPatient/new-patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService} from 'src/app/services/doctors/doctors.service'
@Component({
  selector: 'app-new-medic',
  templateUrl: './new-medic.page.html',
  styleUrls: ['./new-medic.page.scss'],
})
export class NewMedicPage implements OnInit {
  public myForm: FormGroup;
  patient: Patient;
  doctor: Doctor;
  url;
  public estados:string[];
  constructor(private patientService: NewPatientService,
    private actrouter: ActivatedRoute,
    private doctorService:DoctorsService,
    private form: FormBuilder,
    private router:Router) { }

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
      idCard: ['', Validators.compose([
        Validators.required
      ])],
      sex: ['', Validators.compose([
        Validators.required
      ])],
      
      dom: ['', Validators.compose([
        Validators.required
      ])],
      telephone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(10)
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
      ])],
      cedula: ['', Validators.compose([
        Validators.pattern('[0-9]+'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ])]
    });
  }
  newDoctor() {
    this.doctor = {
      name: this.myForm.get('name').value,       // nombre
      sex: this.myForm.get('sex').value,         // Hombre,Mujer, Otro:espesificar
      dom: this.myForm.get('dom').value,          // Domicilio actual
      telephone: this.myForm.get('telephone').value,     // telefono actual
      blood: this.myForm.get('blood').value,  // alergias
      email: this.myForm.get('email').value,
      password: this.myForm.get('pass').value,
      link:this.url,
      idCard:this.myForm.get('cedula').value
    }
    this.doctorService.newDoctor(this.doctor);
    this.router.navigate(['/admin-tabs/view-doctors'])
  }
  changePhoto() {
    this.url = this.myForm.get('link').value
  }
}
