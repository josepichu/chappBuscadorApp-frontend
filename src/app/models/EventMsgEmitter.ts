export class EventMsgEmitter {

    public msg: string;
    public level:levels;

    constructor(level, msg) {
      this.level = level
      this.msg = msg
    }

}

  enum  levels {
    info = 'alert-info',
    success = 'alert-success',
    danger = 'alert-danger'
  }
