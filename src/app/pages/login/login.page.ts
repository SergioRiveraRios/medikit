import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CreateMedicService } from 'src/app/services/createMedic/create-medic.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { Doctor } from 'src/app/doctorModel/doctor';
import { Patient } from 'src/app/models/patient/patient'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public myForm: FormGroup;
  public isLogged: any = false;
  public doctors: Doctor[];
  public patients: Patient[] = new Array();
  public activeDoctor: Doctor;
  constructor(private fb: FormBuilder,
    public router: Router,
    public login: LoginServiceService,
    public createService: CreateMedicService,
    public auser: AngularFireAuth) {
      this.getDoctors();
      this.getPatients();
  }

  ngOnInit() {
    this.validations();
    
  }
  validations() {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  Login() {
    for (const index of this.doctors) {
      if (index.email === this.myForm.get('email').value &&
          index.password === this.myForm.get('password').value) {
          console.log(index)
          this.activeDoctor ==  index;
          localStorage.setItem('myData',JSON.stringify(index));
          this.router.navigate(['/tabs/view-patients'])
          break;
      }
    }
    for(const index of this.patients){
      if (index.email === this.myForm.get('email').value &&
          index.password === this.myForm.get('password').value) {
          console.log(index)
          this.sendPatientData(index)
          break;
      }
    }
    
  }
  getDoctors() {
    this.login.getDoctors().subscribe(data => {
      this.doctors = data.map(e => {
        return {
          id:e.payload.doc.id,
          ...e.payload.doc.data()
        } as Doctor;
      })
    });
  }
  getPatients() {
    this.login.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        return {
          id:e.payload.doc.id,
          ...e.payload.doc.data()
        } as Patient;
      })
    });
  }
  sendPatientData(patient:Patient){
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['userhome'], extras);
  }
}
