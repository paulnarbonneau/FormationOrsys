import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NError } from '../../@models/interface/error';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(
    private http:HttpClient
  ) { }


  name = 'LocalStorage'

  create(data:any):Observable<any | NError>{
    return this.http.post(data.url,data)
  }

  read(data?:any):Observable<any | NError>{
    return this.http.get(data.url)
  }

  update(target:any,data:any):Observable<any | NError>{
    return this.http.put(target,data)
  }

  delete(target:any):Observable<any | NError>{
    return this.http.delete(target)
  }
}
