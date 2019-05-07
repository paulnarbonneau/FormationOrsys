import { Component, OnInit } from '@angular/core';
import { AppDispatcher } from '../../@models/interfaces/dispatcher';
import { AppInjector } from '../../app.module';
import { Dispatcher } from '../../@models/tokens/dispatcher';

export class DispatcherComponent{
  dispatcher:AppDispatcher  = AppInjector.get(Dispatcher);
  /* constructor(){
    this.dispatcher = AppInjector.get(Dispatcher);
  } */
}

@Component({
  selector: 'app-screen-list',
  templateUrl: './screen-list.component.html',
  styleUrls: ['./screen-list.component.scss']
})
export class ScreenListComponent extends DispatcherComponent  {

  constructor() {
    super()

/*     console.groupCollapsed('ScreenListComponent')
    console.log(this.dispatcher);
    console.table({name:1,id:2,key:123})
    console.groupEnd(); */
  }

}



