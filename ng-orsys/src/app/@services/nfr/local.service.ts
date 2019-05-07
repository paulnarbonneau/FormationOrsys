import { Injectable } from '@angular/core';
import { StateSubscriber } from '../../@models/abstract/state-connector';
import { WsService } from './ws.service';
import { NetService } from './net.service';
import { from as RxFrom , of as RxOf, Observable } from 'rxjs';
import { NError } from '../../@models/interface/error';


@Injectable({
  providedIn: 'root'
})
export class LocalService {

  name = 'LocalStorage'

  create(data:any):Observable<any | NError>{
    window.localStorage.setItem(this.name, JSON.stringify(data))
    return RxOf(true);
  }

  read(data?:any):Observable<any | NError>{
    const localData = window.localStorage.getItem(this.name)
    const parsedData = JSON.parse(localData);
    return RxOf(parsedData);
  }

  update(target:any,data:any):Observable<any | NError>{
    window.localStorage.setItem(this.name, JSON.stringify(data))
    return RxOf(true);
  }

  delete(target:any):Observable<any | NError>{
    window.localStorage.removeItem(this.name)
    return RxOf(true);
  }

}
