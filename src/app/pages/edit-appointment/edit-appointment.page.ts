import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment/appointment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentsService } from 'src/app/services/Appointments/appointments.service'
import { ToastController } from '@ionic/angular';
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
    private appointmentService: AppointmentsService,
    private router:Router,
    public toastController: ToastController) {
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
  async editAppointment() {
    this.getDate();
    this.appointment.date = this.appointmentDate.getDate() + '-' +
      (this.appointmentDate.getMonth() + 1) + '-' +
      this.appointmentDate.getFullYear(),
      this.appointment.time = this.appointmentTime.getHours() + ':' +
      this.appointmentTime.getMinutes()
    this.appointmentService.editAppointment(this.appointment);
    this.router.navigate(['/tabs/view-patients'])
    await this.presentToast();
  }

  getDate() {
    this.appointmentDate = new Date(this.myForm.get('date').value);
    this.appointmentTime = new Date(this.myForm.get('time').value);
  }

  cancelAppointment(){
        this.appointment.cancelled=true;
        this.appointment.status=false;
        this.appointmentService.editAppointment(this.appointment);
        this.router.navigate(['/tabs/view-patients'])
        this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cita modificada',
      duration: 500
    });
    toast.present();
  }
}
