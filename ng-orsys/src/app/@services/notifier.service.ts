import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifierService extends  EventEmitter<{name:string,payload:any}>{

  constructor() {super(); }

  notify(event:{name:string,payload:any}) {
    this.emit(event);
  }
}
