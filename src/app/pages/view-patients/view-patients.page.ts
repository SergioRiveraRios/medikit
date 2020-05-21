import { Component, OnInit } from '@angular/core';
import {Patient} from 'src/app/models/patient'
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.page.html',
  styleUrls: ['./view-patients.page.scss'],
})
export class ViewPatientsPage implements OnInit {
  constructor(private router: Router) { }
  patients: any=[
    {
      name:'Sergio Rivera',
      age:20,
      sex:'Masculino',
      civil:'Soltero',
      origin:'Tepic,Nayarit',
      dom:'Helechos #130',
      telephone:'3112022118',
      id_number:12332123,
      family:'',
      next:'20/05/2020',
      status:true,
      descrip:'Consulta ocular'
    },
    {
      name:'Luis Fernandez',
      age:19,
      sex:'Masculino',
      civil:'Soltero',
      origin:'Tepic,Nayarit',
      dom:'Helechos #130',
      telephone:'3112022118',
      id_number:12332123,
      family:'',
      next:'24/05/2020',
      status:false,
      descrip:'Revisión rutinaria'
    }
  ]
  ngOnInit() {
  }
  viewPatient(student: any): void {
    const extras:NavigationExtras = {
      queryParams: {
        special: JSON.stringify(student)  
      }
    };
    this.router.navigate(['../detail-patient'],extras); 
  }
  newPatient(){
    this.router.navigate(['../add-patient']); 
  }
}
