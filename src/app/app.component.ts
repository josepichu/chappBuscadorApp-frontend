import { Component } from '@angular/core';
import { log } from 'util';
import { EventEmmiterService } from './services/event.emmiter.service';
import { EventMsgEmitter } from './models/EventMsgEmitter';
import { StatusMsgComponent } from './components/layout/status-msg/status-msg.component';
import { AuthService } from './services/auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Hotel Stylo';

  show_status_msg: boolean = false;
  status_msg_data: EventMsgEmitter;
  

  constructor(private _eventEmiter: EventEmmiterService, public authService:AuthService) {
    this._eventEmiter.statusMsg.subscribe(data => this.setEstatusMsg(data));
  }
 
  setEstatusMsg(data:EventMsgEmitter) {
    this.show_status_msg = true;
    this.status_msg_data = data;

    console.log(data);
    
    setTimeout(function() {
      this.show_status_msg = false;
    }.bind(this), 3000)

  }

}
