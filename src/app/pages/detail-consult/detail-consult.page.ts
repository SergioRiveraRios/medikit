import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation';

@Component({
  selector: 'app-detail-consult',
  templateUrl: './detail-consult.page.html',
  styleUrls: ['./detail-consult.page.scss'],
})
export class DetailConsultPage implements OnInit {
  consult:MedicalConsultation;
  constructor(private actrouter:ActivatedRoute) {
    this.actrouter.queryParams.subscribe(
      params => {
        this.consult = JSON.parse(params.special);
      }// params
    ); // actrouter
   }

  ngOnInit() {
  }

}
