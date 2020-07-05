import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients/patients.service'
import { Patient } from 'src/app/models/patient/patient';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/doctorModel/doctor';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  public myForm: FormGroup;
  patient: Patient;
  doctor: Doctor;
  url;
  public estados: string[];

  public isLogged: boolean = false;
  constructor(private form: FormBuilder,
    private patientService: PatientsService,
    private router: Router,
    private actrouter: ActivatedRoute,
    public loadingController: LoadingController,
    public toastController: ToastController) {
    this.getDoctorData();
  }

  ngOnInit() {
    this.validations();
  }
  validations() {
    this.myForm = this.form.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ])],
      age: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]*[0-9]'),
      ])],
      sex: ['', Validators.compose([
        Validators.required
      ])],
      civil: ['', Validators.compose([
        Validators.required
      ])],
      origin: ['', Validators.compose([
        Validators.required
      ])],
      dom: ['', Validators.compose([
        Validators.required
      ])],
      telephone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ])],
      family: [''],
      weight: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]*[0-9]*[0-9]'),
        Validators.minLength(2),
        Validators.maxLength(3)
      ])],
      height: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]*[0-9]*[0-9]'),
        Validators.minLength(2),
        Validators.maxLength(3)
      ])],
      email: ['', Validators.compose([
        Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.]+[.][a-zA-Z0-9]+')
      ])],
      pass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      blood: ['', Validators.compose([
        Validators.required,
      ])],
      link: ['', Validators.compose([
        Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}')
      ])]
    });
  }
  async newPatient() {
    
      this.patient = {
        name: this.myForm.get('name').value,       // nombre
        age: this.myForm.get('age').value,           // edad
        sex: this.myForm.get('sex').value,         // Hombre,Mujer, Otro:espesificar
        height: this.myForm.get('height').value,      // altura
        weight: this.myForm.get('weight').value,        // peso
        civil: this.myForm.get('civil').value,         // estado civil
        origin: this.myForm.get('origin').value,      // Lugar de origen
        dom: this.myForm.get('dom').value,          // Domicilio actual
        telephone: this.myForm.get('telephone').value,     // telefono actual
        blood: this.myForm.get('blood').value,  // alergias
        email: this.myForm.get('email').value,
        password: this.myForm.get('pass').value,
        medic: this.doctor.id,
        link: this.url
      }
      await this.presentLoading();
      this.patientService.newPatient(this.patient, this.doctor.id);
    
  }
  getDoctorData() {
    this.actrouter.queryParams.subscribe(
      params => {
        this.doctor = JSON.parse(params.special) as Doctor;
      } // params
    ); // actrouter
  }
  changePhoto() {
    this.url = this.myForm.get('link').value
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, espere',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Paciente creado correctamente',
      duration: 1000
    });
    toast.present();
  }
}
