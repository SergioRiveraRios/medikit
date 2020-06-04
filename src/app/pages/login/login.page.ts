import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CreateMedicService } from 'src/app/services/createMedic/create-medic.service'
import { AngularFireAuth } from '@angular/fire/auth';
import { Doctor } from 'src/app/doctorModel/doctor';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public myForm: FormGroup;
  public isLogged: any = false;
  user: Doctor = new Doctor();
  constructor(private fb: FormBuilder,
              public router: Router,
              public login: LoginServiceService,
              public createService: CreateMedicService,
              public auser: AngularFireAuth) {
  }

  ngOnInit() {
    this.validations();
  }
  validations(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  async Login() {
    const user = await this.login.signInEmail(
      this.myForm.get('email').value,
      this.myForm.get('password').value);
      
    if (user) {
      console.log(user.user.uid)
      this.router.navigate(['/tabs']);
    }
    else {
      console.log();
    }
  }
}
