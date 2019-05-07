import { AppAction } from './action';
import { Observable } from 'rxjs';

export interface AppDispatcher {

    dispatch (action) : Observable<AppAction>
}
