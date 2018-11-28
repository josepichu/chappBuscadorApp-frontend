import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservasUsuarioResponse } from '../models/Response/ReservasUsuarioResponse';
import { httpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  http:HttpClient;

  constructor(http:HttpClient, 
    public httpCustomService:httpService,
    public httpService:httpService
    ) {
    this.http = http;
  }

  reservasUsuario$(): Observable<ReservasUsuarioResponse>{
    return this.http.get<ReservasUsuarioResponse>(`${environment.apiURL}/reservas/usuario`,{
      headers: this.httpService.createAuthorizationHeader(),
    });
  }
}
