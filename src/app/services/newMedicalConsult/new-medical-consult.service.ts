import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

import { MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation'
@Injectable({
  providedIn: 'root'
})
export class NewMedicalConsultService {

  constructor(private firestore: AngularFirestore) { }

  newMedical(medicalConsultation: MedicalConsultation) {
    this.firestore.collection('MedicalConsult').add({
      doctorID: medicalConsultation.idMedic,
      patientID: medicalConsultation.idPatient,
      appointmentID: medicalConsultation.idAppointment,
      date: medicalConsultation.date,
      patientName: medicalConsultation.patientName,
      description: medicalConsultation.descrip,
      treatment: medicalConsultation.resipe,
      
    })
  } 
}
