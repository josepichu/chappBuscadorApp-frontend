export class EventMsgEmitter {

    public msg: string;
    public level:string;

    constructor(level, msg) {
      this.level = 'alert-' + level
      this.msg = msg
    }

}

