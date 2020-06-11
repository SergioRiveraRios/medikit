import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Patient} from 'src/app/models/patient/patient'
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
  patient:Patient;
  constructor(private actrouter:ActivatedRoute) { 
    this.getPatient();
  }

  ngOnInit() {
  }
  getPatient(){
    this.actrouter.queryParams.subscribe(
      params => {
        this.patient = JSON.parse(params.special);
      }// params
    ); // actrouter
  }
}
