import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment'
import { Patient } from 'src/app/models/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.page.html',
  styleUrls: ['./new-appointment.page.scss'],
})
export class NewAppointmentPage implements OnInit {
  patient: Patient;
  public myForm: FormGroup;
  constructor(private actrouter: ActivatedRoute, private router: Router,private form: FormBuilder) {
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special);
      }//params
    );//actrouter
  }//constructor

  ngOnInit() {
    this.validations();
  }
  validations() {
    this.myForm = this.form.group({
      date: ['', Validators.compose([
        Validators.required
      ])],
      descrip: ['', Validators.compose([
        Validators.required
      ])]
    })
  }
}
