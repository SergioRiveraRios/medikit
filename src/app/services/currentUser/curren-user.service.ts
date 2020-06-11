import { Injectable } from '@angular/core';
import {Doctor} from 'src/app/doctorModel/doctor'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrenUserService {
  currentDoctor:Doctor;
  constructor() {

  }

  setUser(doctor:Doctor){
    console.log('setted')
    this.currentDoctor=doctor;
  }
  getUser(){
    return this.currentDoctor;
  }
}
