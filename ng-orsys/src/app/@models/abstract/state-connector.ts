import { GobalRootInjector } from '../../main/main.injector';
import { NotifierService } from '../../@services/notifier.service';
import { DispatcherService } from '../../@services/dispatcher.service';

export function StateSubscriber<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        notifier = GobalRootInjector().get(NotifierService)
        dispatcher = GobalRootInjector().get(DispatcherService)
    }
}

export function Notify(eventName: string) {
    
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const _captured = target[key];
        descriptor.value = (...args):any|void => {
            const computedValue = _captured.apply(target,args);
            console.warn(eventName + computedValue);
            return computedValue;
        }
    };
}