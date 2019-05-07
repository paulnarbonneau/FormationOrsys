import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../@models/interfaces/manager';
import { AppNews } from '../@models/interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Manager<AppNews> {

  collection: AppNews[];
  create(param: AppNews): Observable<AppNews> {
    throw new Error("Method not implemented.");
  }
  read(): Observable<AppNews[]> {
    throw new Error("Method not implemented.");
  }
  update(target: AppNews, udpdates: AppNews): Observable<AppNews> {
    throw new Error("Method not implemented.");
  }
  delete(target: AppNews): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  constructor() { }
}
