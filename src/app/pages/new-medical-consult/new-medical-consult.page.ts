import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

import {MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation'
@Component({
  selector: 'app-new-medical-consult',
  templateUrl: './new-medical-consult.page.html',
  styleUrls: ['./new-medical-consult.page.scss'],
})
export class NewMedicalConsultPage implements OnInit {
  public medicalConsult:MedicalConsultation;
  constructor(private actrouter:ActivatedRoute) { 
    
    this.getAppointment();
  }

  ngOnInit() {
  }
  getAppointment(){
    this.actrouter.queryParams.subscribe(
      params => {
        this.medicalConsult = JSON.parse(params.special) as MedicalConsultation;
      }// params
    ); // actrouter
  }
}
