import { GobalRootInjector } from '../../main/main.injector';
import { NotifierService } from '../../@services/notifier.service';
import { DispatcherService } from '../../@services/dispatcher.service';

export function StateSubscriber<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        notifier = GobalRootInjector().get(NotifierService)
        dispatcher = GobalRootInjector().get(DispatcherService)
    }
}

export function Notify(event: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const _captured = target[key];
        descriptor.value = (...args):any|void => {
            const computedValue = _captured.apply(target,args);
            alert(event + computedValue);1.0
            return computedValue;
        }
    };
}