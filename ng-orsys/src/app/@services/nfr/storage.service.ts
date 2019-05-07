import { Injectable } from '@angular/core';
import { WsService } from './ws.service';
import { NetService } from './net.service';
import { LocalService } from './local.service';
import { Observable } from 'rxjs';
import { NError } from '../../@models/interface/error';
import { StateSubscriber } from '../../@models/abstract/state-connector';


export enum Storage {
  LOCAL,
  HTTP,
  WS
}


// @StateSubscriber
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  
  static storages = [];

  constructor(
    private ws: WsService,
    private http: NetService,
    private local: LocalService
  ) { }

  create(name:string, type:Storage){

    const operators = {
      [Storage.LOCAL]:this.local,
     /*  [Storage.WS]:this.ws, */
      [Storage.HTTP]:this.http
    }

    const storage = {
      name,
      type,
      create(data:any):Observable<any | NError>{
        console.log(operators)
        return operators[type].create(data);
      },
      read(data?:any):Observable<any | NError>{
        return operators[type].read(data);
      },
      update(target:any,data:any):Observable<any | NError>{
        return operators[type].update(data);
      },
      delete(target:any):Observable<any | NError>{
        return operators[type].delete(target);
      }
    }
    StorageService.storages.push(storage);
    return storage;
  }
}
