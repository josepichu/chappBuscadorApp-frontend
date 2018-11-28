import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionesService } from '../../../services/habitaciones.service';
import { EventEmmiterService } from 'src/app/services/event.emmiter.service';
import { Habitacion } from 'src/app/models/Habitacion';
import { Reserva } from '../../../models/Reserva';
import { AuthService } from 'src/app/services/auth/auth.service';



@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.sass']
})
export class ReservaComponent implements OnInit {

  public loading:boolean = true;

  public habitacion:Habitacion;

  public num_noches: number = 0;
  
  public reserva:Reserva = new Reserva();

  constructor(public activatedRoute:ActivatedRoute, 
    public habService:HabitacionesService,
    public eventEmmiterService:EventEmmiterService,
    public route:Router,
    public authService:AuthService
    ) {

    this.activatedRoute.params.subscribe(
      params => {

        console.log(params);
        
        let habitacion_id = params.habitacion_id
                
        this.habService.detallesHabitacion$(habitacion_id).subscribe(
          response => {

            this.loading = false;
            if (response.success) {
              this.habitacion = response.data[0];

              this.reserva.fecha_entrada = params.fecha_entrada
              this.reserva.fecha_salida = params.fecha_salida
              
  
              var startDate = Date.parse(this.reserva.fecha_entrada);
              var endDate = Date.parse(this.reserva.fecha_salida);
              var timeDiff = endDate - startDate;
              this.num_noches = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
              this.reserva.total = this.num_noches  * this.habitacion.precio
              this.reserva.habitacion = this.habitacion


            } else {
              this.eventEmmiterService.sendStatusMessage('danger', response.mensaje.msg);
            }
          }
        );

    })

   }

  ngOnInit() {
  }

  onSubmit() {
     
    this.habService.reservarHabitacion$(this.reserva)
      .subscribe(response => {
                
       if (response.success) {
           
           this.eventEmmiterService.sendStatusMessage('success', 'Reserva realizada correctamente, Nº de localizador ' + response.data);

           this.route.navigate(['home'])
           
       } else {
        this.eventEmmiterService.sendStatusMessage('danger', response.mensaje.msg);
       }
           
      }, 
      response => {
        console.error(response);
        this.eventEmmiterService.sendStatusMessage('danger', 'Error inesperado');
      })

    
  }  

}
