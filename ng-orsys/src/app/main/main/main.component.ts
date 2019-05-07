import { Component, OnInit } from '@angular/core';
import { StateSubscriber, Notify } from '../../@models/abstract/state-connector';
import { StorageService } from '../../@services/nfr/storage.service';


@StateSubscriber
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  @Notify('🤘 GOTCHA 🤘')
  init(msg:string){
    return msg + '!!!'
  }

  ngOnInit() {
  }

}
