import { Component, OnInit } from '@angular/core';
import {Patient} from 'src/app/models/patient'

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.page.html',
  styleUrls: ['./view-patients.page.scss'],
})
export class ViewPatientsPage implements OnInit {
  constructor() { }
  patients: any=[
    {
      name:'Sergio',
      age:19,
      sex:'Masculino',
      civil:'Soltero',
      origin:'Tepic,Nayarit',
      dom:'Helechos #130',
      telephone:'3112022118',
      id_number:12332123,
      family:'',
      next:'20/05/2020',
      status:true
    },
    {
      name:'Sergio',
      age:19,
      sex:'Masculino',
      civil:'Soltero',
      origin:'Tepic,Nayarit',
      dom:'Helechos #130',
      telephone:'3112022118',
      id_number:12332123,
      family:'',
      next:'20/05/2020',
      status:true
    }
  ]
  ngOnInit() {
  }
  
}
