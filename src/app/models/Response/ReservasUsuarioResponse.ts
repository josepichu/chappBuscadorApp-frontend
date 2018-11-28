import { BaseResponse } from './BaseResponse';
import { Reserva } from '../Reserva';

/**
 * class Response para mapear las búsquedas de disponibilidad
 */
export class ReservasUsuarioResponse extends BaseResponse {
    public data:Reserva[]
}
