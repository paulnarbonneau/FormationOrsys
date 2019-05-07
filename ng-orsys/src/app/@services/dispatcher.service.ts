import { Injectable, EventEmitter } from '@angular/core';
import { NNews } from '../@models/interface/news';
import { GlobalRootInjector } from '../main/main.injector';
import { NewsService } from './news.service';
import { tap } from 'rxjs/operators';


//-----------------------
const store = new EventEmitter();

// WTF is the data
const state:any = {};

const reducer = (action:NAction) => {
  console.log(Date.now(), action);
  switch (action.type) {
    case ActionType.GET_NEWS:

      GlobalRootInjector()
      .get(NewsService).getNews()
      .pipe(tap(data => state.news = data))
      .subscribe(data =>{
        console.table(data);
        store.emit(state);
      } );
      return state;
      break;
    case ActionType.SELECT_NEWS:
    return state;
      break;
  
    default:
    return state;
      break;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {
  store = store;
  dispatch(action: NAction) { 
    return reducer(action);
  }
}


//---------------------------
export interface NAction{
  type:ActionType,
  payload?:any,
}

//---------------------------
export enum ActionType {
  GET_NEWS,
  SELECT_NEWS
}
//-------------------------

class GetNews implements NAction{
  type = ActionType.GET_NEWS
}
class SelectNews implements NAction{
  type = ActionType.SELECT_NEWS
  constructor(public payload:NNews){}
}
export const ActionCreators = Object.freeze({
  GetNews,
  SelectNews
})
