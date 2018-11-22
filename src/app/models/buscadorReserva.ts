export class buscadorReserva {

    public fecha_entrada:string;
    public fecha_salida:string;
    public numero_adultos:number;
    public numero_peques:number;
    public todos_residentes?: boolean;

    constructor(fecha_entrada, fecha_salida, numero_adultos, numero_peques, residentes) {
        this.fecha_entrada = fecha_entrada
        this.fecha_salida = fecha_salida
        this.numero_adultos = numero_adultos
        this.numero_peques = numero_peques
        this.todos_residentes = residentes
    }

    /**
     * 
     * GETTERS AND SETTERS
     */

    /**
     * 
     * @param residentes 
     */
    setTodosResidentes(residentes:boolean) {
        this.todos_residentes = residentes;   
    }

}