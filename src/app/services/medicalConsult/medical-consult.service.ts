import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore'
import { MedicalConsultation } from 'src/app/models/medicalConsultation/medical-consultation'

@Injectable({
  providedIn: 'root'
})
export class MedicalConsultService {

  constructor(private firestore:AngularFirestore) { }

  getPatientConsults(patientID: string){
    return this.firestore.collection('MedicalConsult',
     ref=>ref.where('patientID', '==', patientID)).snapshotChanges()
  }
  deletePatientConsults(patientID:string){
    this.firestore.collection('MedicalConsult').doc(patientID).delete();
  }
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
