import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router} from '@angular/router';
import {Patient} from 'src/app/models/patient/patient';
=======
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router'
import {Patient} from 'src/app/models/patient'
>>>>>>> 34109ac65102375f9a135cea4f3d34789569ba4b
@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.page.html',
  styleUrls: ['./detail-patient.page.scss'],
})
export class DetailPatientPage implements OnInit {
  patient: Patient;
  constructor(private actrouter: ActivatedRoute, private router: Router) {
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special);
      }// params
    ); // actrouter
  }// constructor
  ngOnInit() {
  }
  newAppointment(patient:Patient):void{
    const extras:NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)  
      }
    };
    this.router.navigate(['../new-appointment'],extras);
  }
}
