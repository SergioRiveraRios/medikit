import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Doctor } from 'src/app/doctorModel/doctor';
import {DoctorsService} from 'src/app/services/doctors/doctors.service'
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.page.html',
  styleUrls: ['./detail-doctor.page.scss'],
})
export class DetailDoctorPage implements OnInit {
  doctor:Doctor;
  constructor(private actrouter:ActivatedRoute,
              private router:Router,
              private doctorService:DoctorsService,
              public toastController:ToastController) { 
    this.actrouter.queryParams.subscribe(
      params => {
        this.doctor = JSON.parse(params.special);
      }// params
    ); // actrouter
  }

  ngOnInit() {
  }
  newPatient(){
      const extras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.doctor)
        }
      };
      this.router.navigate(['../add-patient'], extras);
  }
  deleteDoctor(){
    this.doctorService.deleteDoctor(this.doctor.id);
    this.presentToast()
    this.router.navigate(['/admin-tabs/view-doctors'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Medico eliminado correctamente',
      duration: 1000
    });
    toast.present();
  }
}
