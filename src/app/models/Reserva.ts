import { Habitacion } from './Habitacion';


export class Reserva  extends Habitacion {

    public id?: number;
    public habitacion_id: number;
    public localizador: string;
    public habitacion:Habitacion
    public fecha_entrada:string;
    public fecha_salida:string;
    public tarjeta_credito:number;
    public email_contacto:string;
    public telefono_contacto:number;
    public total:number

  }