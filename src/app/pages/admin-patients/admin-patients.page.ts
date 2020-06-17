import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { PatientsService } from 'src/app/services/patients/patients.service'
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-admin-patients',
  templateUrl: './admin-patients.page.html',
  styleUrls: ['./admin-patients.page.scss'],
})
export class AdminPatientsPage implements OnInit {
  public patients: Patient[];
  constructor(public patientService: PatientsService,
    public alertController: AlertController,
    private router: Router) {
    this.getpatientsCollection();
  }

  ngOnInit() {
  }
  getpatientsCollection() {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Patient;
      })
    });
  }

  async presentAlertMultipleButtons(patient: Patient) {
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
        text: 'Ver paciente',
        role: 'edit',
        handler: () => {
          this.editPatient(patient);
        }
      }]
    });

    await alert.present();
  }
  editPatient(patient: Patient) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['/detail-patient'], extras);
  }
}
