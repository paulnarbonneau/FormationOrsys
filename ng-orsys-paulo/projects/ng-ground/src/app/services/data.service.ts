import { Injectable } from '@angular/core';
import { Manager } from '../@models/interfaces/manager';
import { AppNews } from '../@models/interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Manager<AppNews>{
  
  collection: AppNews[];
  create(param: AppNews): import("rxjs").Observable<AppNews> {
    throw new Error("Method not implemented.");
  }
  read(): import("rxjs").Observable<AppNews[]> {
    throw new Error("Method not implemented.");
  }
  update(target: AppNews, updates: AppNews): import("rxjs").Observable<AppNews> {
    throw new Error("Method not implemented.");
  }
  delete(target: AppNews): import("rxjs").Observable<AppNews> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
