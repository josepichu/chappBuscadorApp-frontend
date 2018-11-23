import { Component } from '@angular/core';
import { buscadorReserva } from '../../models/buscadorReserva';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent  {

  public buscadorReserva =  new buscadorReserva('2019-01-01', null, 0, 0, false);
  
  constructor() { 
    
  }

  onClickResidentes() {
   this.buscadorReserva.setTodosResidentes(!this.buscadorReserva.todos_residentes); 
  }

}
