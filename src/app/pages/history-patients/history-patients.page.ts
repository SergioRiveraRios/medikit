import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-history-patients',
  templateUrl: './history-patients.page.html',
  styleUrls: ['./history-patients.page.scss'],
})
export class HistoryPatientsPage implements OnInit {
  appointments: Appointment[] = new Array();
  constructor() { }

  ngOnInit() {
    this.test();
  }
  test(){
    this.appointments.push({
      medic: '1232323',
      patient: '43434212',
      fechaCon: '30/03/2020'
    }, {
      medic: '03212332',
      patient: '5123421',
      fechaCon: '03/04/2020'
    });
  }
}
