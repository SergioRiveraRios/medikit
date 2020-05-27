export class Patient {
    name: string;       // nombre
    age: number;        // edad
    sex: string;        // Hombre,Mujer, Otro:espesificar
    height: string;     // altura
    weight: string;     // peso
    civil: string;      // estado civil
    origin: string;     // Lugar de origen
    dom: string;        // Domicilio actual
    telephone: string;  // telefono actual
    idNumber: number;   // No. de control
    status: boolean;    // que tipos
    next: string;       // Siguiente cita
    blood: string;      // tipo de sangre
    alergic: string;    // alergias
    family: string;     // antecedentes familiares por enfermedades
    descrip: [];        // Descripciones/valoraciones por consulta
    resipe: [];         // recetas
}
