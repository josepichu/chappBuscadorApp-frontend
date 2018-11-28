import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { EventEmmiterService } from 'src/app/services/event.emmiter.service';
import { Reserva } from 'src/app/models/Reserva';

@Component({
  selector: 'app-reservas.usuario',
  templateUrl: './reservas.usuario.component.html',
  styleUrls: ['./reservas.usuario.component.sass']
})
export class ReservasUsuarioComponent implements OnInit {

  public reservas:Reserva[];

  constructor(public reservasService:ReservasService, public eventEmmiterService:EventEmmiterService) {

    this.reservasService.reservasUsuario$().subscribe(
      response => {

        console.log(response);
        

        if (response.success) {

          this.reservas = response.data;

        } else this.eventEmmiterService.sendStatusMessage('danger', response.mensaje.msg);

      })  

   }

  ngOnInit() {
  }

}
