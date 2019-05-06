import { Observable } from 'rxjs';

export interface Manager<T> {

    collection:Array<T>;
    create(param:T):Observable<T>;
    read():Observable<T[]>;
    update(target:T,updates:T):Observable<T>;
    delete(target:T):Observable<T>;
}
