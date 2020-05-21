import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {Patient} from 'src/app/models/patient'
@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.page.html',
  styleUrls: ['./detail-patient.page.scss'],
})
export class DetailPatientPage implements OnInit {
  patient: any;
  constructor(private actrouter: ActivatedRoute, private router: Router) {
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special);
      }//params
    );//actrouter
  }//constructor
  ngOnInit() {
  }

}
