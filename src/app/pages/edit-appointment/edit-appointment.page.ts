import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/appointment/appointment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service'
@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.page.html',
  styleUrls: ['./edit-appointment.page.scss'],
})
export class EditAppointmentPage implements OnInit {
  public appointment: Appointment;
  public myForm: FormGroup;
  public toggleEdit: boolean = true;
  public deleteStatus: boolean = true;
  public editStatus: boolean = false;
  appointmentDate: Date;
  appointmentTime: Date;
  constructor(private actrouter: ActivatedRoute,
    private form: FormBuilder,
    private appointmentService: AppointmentsService) {
    this.getAppointment();
  }

  ngOnInit() {
    this.validations();
  }
  validations() {
    this.myForm = this.form.group({
      date: ['', Validators.compose([
        Validators.required
      ])],
      time: ['', Validators.compose([
        Validators.required
      ])],
      delete: ['']
    });
  }
  getAppointment() {
    this.actrouter.queryParams.subscribe(
      params => {
        this.appointment = JSON.parse(params.special) as Appointment;
        console.log(this.appointment)
      }// params
    ); // actrouter
  }
  changeEditStatus() {
    this.toggleEdit = !this.toggleEdit;
    if (this.toggleEdit === true) {
      this.myForm.get('date').disable();
      this.myForm.get('time').disable();
      this.deleteStatus = false;
      this.editStatus = true;
    }
    if (this.toggleEdit === false) {
      this.myForm.get('date').enable();
      this.myForm.get('time').enable();
      this.myForm.get('delete').disable();
      this.deleteStatus = true;
      this.editStatus = false;

    }
  }
  editAppointment() {
    this.getDate();
    this.appointment.date = this.appointmentDate.getDate() + '-' +
      (this.appointmentDate.getMonth() + 1) + '-' +
      this.appointmentDate.getFullYear(),
      this.appointment.time = this.appointmentTime.getHours() + ':' +
      this.appointmentTime.getMinutes()
    this.appointmentService.editAppointment(this.appointment);
  }

  getDate() {
    this.appointmentDate = new Date(this.myForm.get('date').value);
    this.appointmentTime = new Date(this.myForm.get('time').value);
  }
}
