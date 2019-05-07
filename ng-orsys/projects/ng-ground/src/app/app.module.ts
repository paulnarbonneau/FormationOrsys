import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main/main.component';
import { Dispatcher } from './@models/tokens/dispatcher';
import { AppDispatcher } from './@models/interfaces/dispatcher';

export let AppInjector; 

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MainModule
  ],
  providers: [],
  bootstrap: [MainComponent],
  exports: []
})
export class AppModule { 
  constructor( injector:Injector){
    AppInjector = injector;
  }
}

