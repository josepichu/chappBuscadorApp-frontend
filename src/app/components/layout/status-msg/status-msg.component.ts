import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-msg',
  templateUrl: './status-msg.component.html',
  styleUrls: ['./status-msg.component.sass']
})
export class StatusMsgComponent implements OnInit {

  @Input() level: string;
  @Input() msg: string;

  constructor() {

  }

  ngOnInit() {
  }

}
