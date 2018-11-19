import { Component } from '@angular/core';
import { buscadorReserva } from '../../models/buscadorReserva';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent  {

  public buscadorReserva:buscadorReserva = {
    fecha_entrada: '2019-01-01',
    fecha_salida: null,
    numero_adultos: -1,
    numero_peques: -1
  };

  constructor() { 
    
  }


}
