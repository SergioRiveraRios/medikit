import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { Patient} from 'src/app/models/patient/patient'
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
  patient:Patient;
  constructor(private actrouter:ActivatedRoute,
              private router:Router) { 
    this.patient = JSON.parse(localStorage.getItem('myData')) as Patient;
  }

  ngOnInit() {
  }
  viewAppointments(){
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.patient)
      }
    };
    this.router.navigate(['/patient-appointments'], extras);
  }
  viewMedicalConsults(){
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.patient)
      }
    };
    this.router.navigate(['/patient-medical-consults'], extras);
  }
  logout(){
    this.router.navigate(['login'])
  }
}
