import { Injectable } from '@angular/core';
import {Doctor} from 'src/app/doctorModel/doctor'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentDoctor:Doctor;
  constructor() { }

  setUser(doctor:Doctor){
    console.log('setted')
    this.currentDoctor=doctor;
  }
  getUser(){
    return this.currentDoctor;
  }
}
