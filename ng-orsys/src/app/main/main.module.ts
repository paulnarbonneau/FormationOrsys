import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GobalRootInjector } from './main.injector';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
  constructor(injector : Injector){
    GobalRootInjector(injector);
  }
 }
