import { Component, OnInit } from '@angular/core';
import { Patient} from 'src/app/models/patient/patient';
import { NavigationExtras, Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase/app'

import {Doctor} from 'src/app/doctorModel/doctor'
@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.page.html',
  styleUrls: ['./view-patients.page.scss'],
})
export class ViewPatientsPage implements OnInit {
  patients: Patient[] = new Array();
  public isLogged: any = false;
  userid:string
  constructor(private router: Router,public auser: AngularFireAuth) { 
  }
  ngOnInit() {
    // this.test();
  }
  /*test(){
    this.patients.push({
      apPaterno: 'Rivera',
      apMaterno: 'Rios',
      nombres: 'Sergio',
      edad: 20,
      sexo: 'Masculino',
      civil: 'Soltero',
      origen: 'Tepic,Nayarit',
      dom: 'Helechos #130',
      contacto: '3112022118',
      idNumber: 12332123,
      sigCita: '20/05/2020',
      status: true,
      descrip: 'Consulta ocular'
    },
    {
      name: 'Luis Fernandez',
      age: 19,
      sex: 'Masculino',
      civil: 'Soltero',
      origin: 'Tepic,Nayarit',
      dom: 'Helechos #130',
      telephone: '3112022118',
      id_number: 12332123,
      family: '',
      next: '24/05/2020',
      status: false,
      descrip: 'Revisión rutinaria'
    });
  }*/


  viewPatient(patient: Patient): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)
      }
    };
    this.router.navigate(['../detail-patient'], extras);
  }
  newPatient(){
    this.router.navigate(['../add-patient']);
  }
}
