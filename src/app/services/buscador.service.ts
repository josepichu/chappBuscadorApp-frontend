import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { buscadorReserva } from '../models/buscadorReserva';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BusquedaResponse } from '../models/Response/BusquedaResponse';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  httpService:HttpClient;

  constructor(httpService:HttpClient) {
    this.httpService = httpService;
   }

  buscar$(data:buscadorReserva): Observable<BusquedaResponse>{
    return this.httpService.post<BusquedaResponse>(`${environment.baseURL}/disponibilidad`, data);
  }
  
}
