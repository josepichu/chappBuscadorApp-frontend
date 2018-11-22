import { Habitacion } from '../models/Habitacion';

export class Hotel {

    public id?: number;
    public codigo:string;
    public nombre:string;
    public numero_estrellas:number;
    public direccion:number;
    public num_piscinas: number;
    public gimnasio: boolean;
    public jaccuzzi: boolean;

    public habitaciones_disponibles:Habitacion[];

    constructor(nombre, direccion, num_piscinas, numero_estrellas) {
        this.nombre = nombre;
        this.numero_estrellas = numero_estrellas;
        this.num_piscinas = num_piscinas;
        this.direccion = direccion;
        this.gimnasio = false;
        this.jaccuzzi = false;
    }

    setHabitacionesDisponibles(habitaciones:Habitacion[]) {
        this.habitaciones_disponibles = habitaciones;
    }

    getHabitacionesDisponibles() {
        return this.habitaciones_disponibles;
    }

  }