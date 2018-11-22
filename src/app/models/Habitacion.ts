import { HabitacionTipo } from './HabitacionTipo';

export class Habitacion {

    public id?: number;
    public codigo:string;
    public tipo_habitacion:HabitacionTipo;

    constructor(codigo, tipo_habitacion) {
        this.codigo = codigo;
        this.tipo_habitacion = tipo_habitacion;
    }

  }