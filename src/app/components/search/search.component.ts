import { Component } from '@angular/core';
import { buscadorReserva } from '../../models/buscadorReserva';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent  {

  public buscadorReserva = new buscadorReserva();

  constructor() { 
    
  }


}
