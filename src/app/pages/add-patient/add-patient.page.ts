import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  public myForm: FormGroup;
  constructor(private form: FormBuilder) { }

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
      ingredients: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(150),
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
      id_number: ['', Validators.compose([
        Validators.required
      ])],
      family: ['']
    })
  }
}
