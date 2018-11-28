import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusquedaResponse } from '../models/Response/BusquedaResponse';
import { Habitacion } from '../models/Habitacion';
import { BaseResponse } from '../models/Response/BaseResponse';
import { Reserva } from '../models/Reserva';
import { httpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  httpService:HttpClient;

  constructor(httpService:HttpClient, public httpCustomService:httpService) {
    this.httpService = httpService;
  }

  detallesHabitacion$(habitacion_id:number): Observable<BusquedaResponse>{
    return this.httpService.get<BusquedaResponse>(`${environment.baseURL}/habitacion/${habitacion_id}`);
  }

  reservarHabitacion$(reserva:Reserva): Observable<BaseResponse> {
    return this.httpService.post<BusquedaResponse>(`${environment.apiURL}/reservar`, reserva, {
      headers: this.httpCustomService.createAuthorizationHeader()
    });
  }
  
}
