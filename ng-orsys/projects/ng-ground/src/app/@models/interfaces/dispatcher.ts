import { Observable } from 'rxjs';
import { AppAction } from './action';

export interface AppDispatcher {
    dispatch( action:AppAction ):Observable<AppAction>
}
