import { Injector } from '@angular/core';

let RootInjector;

export const GlobalRootInjector = (injector?:Injector):Injector => {
    if(RootInjector) return RootInjector;
    if(injector) RootInjector = injector;
}