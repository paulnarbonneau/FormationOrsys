import { Observable } from 'rxjs';

export interface AppAction {
    type:string,
    payload?:any,
    result:Observable<any>
}
