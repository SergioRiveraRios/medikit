export class MedicalConsultation {
    idMedic?: string;
    idPatient?:string;
    idAppointment?:string;
    descrip?: string;        // Descripciones/valoraciones por consulta
    resipe?: string[];         // recetas
    date?:string;
    patientName:string;
}
