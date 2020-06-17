import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Patient } from 'src/app/models/patient/patient';
import {MedicalConsultService} from 'src/app/services/medicalConsult/medical-consult.service'
import { MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-patient-medical-consults',
  templateUrl: './patient-medical-consults.page.html',
  styleUrls: ['./patient-medical-consults.page.scss'],
})
export class PatientMedicalConsultsPage implements OnInit {
  public patient:Patient;
  public medicalConsults:MedicalConsultation[];
  constructor(private actrouter:ActivatedRoute,
              private medicalService:MedicalConsultService,
              public alertController: AlertController,
              public router:Router) {
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
  viewConsult(consult: MedicalConsultation): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(consult)
      }
    };
    this.router.navigate(['/detail-consult'], extras);
  }
  async presentAlertMultipleButtons(api:MedicalConsultation) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Selecciona la opción a realizar',
      buttons: [{
        text: 'Cancelar acción',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Detalle Consulta',
        role: 'edit',
        handler: () => {
          this.viewConsult(api)
        }
      }]
    });

    await alert.present();
  }
}
