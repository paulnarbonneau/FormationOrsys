import { Component, OnInit, Inject, Optional } from '@angular/core';
import { DispatcherService } from 'src/app/services/dispatcher.service';
import { AppDispatcher } from '../../@models/interfaces/dispatcher';
import { Dispatcher } from '../../@models/tokens/dispatcher';
import { AppInjector } from '../../app.module';

@Component({
  selector: 'app-screen-login',
  templateUrl: './screen-login.component.html',
  styleUrls: ['./screen-login.component.scss']
})
export class ScreenLoginComponent implements OnInit {

  // constructor( private dispatcher: DispatcherService) { }
  // constructor( @Inject(DispatcherService) private dispatcher: DispatcherService) { }
  constructor(
    @Inject(Dispatcher) private dispatcher: AppDispatcher,
    @Optional() @Inject('Notifier') private notifier,
  ) {
    console.log(this.dispatcher)

  }

  ngOnInit() { }

}
