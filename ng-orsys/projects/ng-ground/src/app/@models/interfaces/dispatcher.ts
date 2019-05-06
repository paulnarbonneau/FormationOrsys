import { AppAction } from './action';
import { Observable } from 'rxjs';

export interface Dispatcher {

    dispatch (action) : Observable<AppAction>
}
