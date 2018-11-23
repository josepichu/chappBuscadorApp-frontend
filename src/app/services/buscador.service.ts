import { Injectable } from '@angular/core';
import { httpService } from './http/http.service';


@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(httpService:httpService) { }
  
}
