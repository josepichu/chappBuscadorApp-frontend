import { BaseResponse } from './BaseResponse';
import { Habitacion } from '../Habitacion';

/**
 * class Response para mapear las búsquedas de disponibilidad
 */
export class BusquedaResponse extends BaseResponse {
    public data:Habitacion[]
}
