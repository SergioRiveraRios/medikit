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
      idMedic: '1232323',
      idPatient: '43434212',
      fechaCon: '30/03/2020',
      descrip: 'Necesita revisión dermátologica'
    }, {
      idMedic: '03212332',
      idPatient: '5123421',
      fechaCon: '03/04/2020',
      descrip: 'Traer jeringas'
    });
  }
}
