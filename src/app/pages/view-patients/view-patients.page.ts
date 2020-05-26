import { Component, OnInit } from '@angular/core';
import {Patient} from 'src/app/models/patient'
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.page.html',
  styleUrls: ['./view-patients.page.scss'],
})
export class ViewPatientsPage implements OnInit {
  patients:Patient[]= new Array();
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.test();
  }
  test(){
    this.patients.push({
      apPaterno:'Rivera',
      apMaterno:'Rios',
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
      apPaterno:'Lopex',
      apMaterno:'Fernandez',
      nombres: 'Luis',
      edad: 20,
      sexo: 'Masculino',
      civil: 'Soltero',
      origen: 'Tepic,Nayarit',
      dom: 'Helechos #135',
      contacto: '3112022118',
      idNumber: 12332123,
      sigCita: '25/05/2020',
      status: false,
      descrip: 'Revisión semanal'
    })
  }
  viewPatient(patient: Patient): void {
    const extras:NavigationExtras = {
      queryParams: {
        special: JSON.stringify(patient)  
      }
    };
    this.router.navigate(['../detail-patient'],extras); 
  }
  newPatient(){
    this.router.navigate(['../add-patient']); 
  }
}
