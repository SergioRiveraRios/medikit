import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient/patient';
import {MedicalConsultService} from 'src/app/services/medicalConsult/medical-consult.service'
import { MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation';
@Component({
  selector: 'app-patient-medical-consults',
  templateUrl: './patient-medical-consults.page.html',
  styleUrls: ['./patient-medical-consults.page.scss'],
})
export class PatientMedicalConsultsPage implements OnInit {
  public patient:Patient;
  public medicalConsults:MedicalConsultation[];
  constructor(private actrouter:ActivatedRoute,
              private medicalService:MedicalConsultService) {
                this.patient = JSON.parse(localStorage.getItem('myData')) as Patient;
                this.getPatientConsults(this.patient.id)
   }

  ngOnInit() {
    
  }

  getPatientConsults(patientID:string){
    this.medicalService.getPatientConsults(patientID).subscribe(
      data => {
        this.medicalConsults = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as MedicalConsultation;
        })
      });
  }
}
