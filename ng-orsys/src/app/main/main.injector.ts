import { Injector } from '@angular/core';

let RootInjector;

export const GobalRootInjector = (injector?:Injector):Injector => {
    if(RootInjector) return RootInjector;
    if(injector) RootInjector = injector;
}