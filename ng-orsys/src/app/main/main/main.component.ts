import { Component, OnInit } from '@angular/core';
import { StateSubscriber, Notify } from '../../@models/abstract/state-connector';

@StateSubscriber
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
    console.log(this)
    console.log(this.init('Hello World'))
  }

  @Notify('HW')
  init(msg:string){
    return msg + '!!!'
  }

  ngOnInit() {
  }

}
