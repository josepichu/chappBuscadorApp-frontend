import {Injectable, EventEmitter} from '@angular/core';
import { EventMsgEmitter } from '../models/EventMsgEmitter';


@Injectable({
  providedIn: 'root'
})
export class EventEmmiterService {

  statusMsg = new EventEmitter();

  constructor() { }

  /**
   * enviamos mensajes de estado al front para ser mostrados al usuario
   * @param data 
   */
  sendStatusMessage(level, msg) {

    var em = new EventMsgEmitter(level, msg)

    this.statusMsg.emit(em);
  }

}
