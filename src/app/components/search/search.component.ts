import { Component } from '@angular/core';
import { buscadorReserva } from '../../models/buscadorReserva';
import { EventEmmiterService } from 'src/app/services/event.emmiter.service';
import { BuscadorService } from 'src/app/services/buscador.service';
import { Habitacion } from '../../models/Habitacion';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent  {

  public buscadorReserva =  new buscadorReserva('2019-01-01', null, 0, 0, false);

  public habitaciones:Habitacion[] = [];
  
  constructor(public eventEmmiterService:EventEmmiterService, 
    public buscadorService:BuscadorService,
    public authService:AuthService
    ) { 
    
  }

  onClickResidentes() {
   this.buscadorReserva.setTodosResidentes(!this.buscadorReserva.todos_residentes); 
  }

  onSubmit() {
    
    if (this.buscadorReserva.numero_adultos > 0 || this.buscadorReserva.numero_peques > 0) {
       
      this.buscadorService.buscar$(this.buscadorReserva)
      .subscribe(response => {
                
       if (response.success) {

           this.habitaciones = response.data;
           
       } else {
        this.eventEmmiterService.sendStatusMessage('danger', response.mensaje.msg);
       }
           
      }, 
      response => {
        console.error(response);
        
      })

    } else this.eventEmmiterService.sendStatusMessage('warning', 'Debe seleccionar los huéspedes');
    
  }

}
