import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-medical-consult',
  templateUrl: './new-medical-consult.page.html',
  styleUrls: ['./new-medical-consult.page.scss'],
})
export class NewMedicalConsultPage implements OnInit {
  public myForm: FormGroup;
  constructor(private form: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.validations();
  }
  validations() {
    this.myForm = this.form.group({
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ])],
      treatment: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9][0-9]'),
      ])]
    });
  }

  
}
