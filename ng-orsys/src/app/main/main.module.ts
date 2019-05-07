import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GobalRootInjector } from './main.injector';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [MainComponent]
})
export class MainModule {
  constructor(injector : Injector){
    GobalRootInjector(injector);
  }
 }
