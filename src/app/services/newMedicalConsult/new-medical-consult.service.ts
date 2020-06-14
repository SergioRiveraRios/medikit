import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

import { MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation'
@Injectable({
  providedIn: 'root'
})
export class NewMedicalConsultService {

  constructor(private firestore: AngularFirestore) { }

 /* newMedical(medicalConsultation:MedicalConsultation) {
    this.firestore.collection('MedicalConsult').add({
      doctorID: medicalConsultation.medicID,
      patientID: medicalConsultation.patientID,
      date: medicalConsultation.date,
      patientName:medicalConsultation.patientName,
      description:medicalConsultation.description,
      treatment:medicalConsultation.treatment
    })
  }*/
}
