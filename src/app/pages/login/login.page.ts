import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validations();
  }
  validations(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')])],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern('[a-zA-Z0-9]+')
      ])]
    });
  }
}
