import { Component, OnInit, Inject } from '@angular/core';
import { DispatcherService } from '../../services/dispatcher.service';
import { Dispatcher } from '../../@models/tokens/dispatcher';

@Component({
  selector: 'app-screen-login',
  templateUrl: './screen-login.component.html',
  styleUrls: ['./screen-login.component.css']
})
export class ScreenLoginComponent implements OnInit {

  constructor(@Inject(Dispatcher) private dispatcher : Dispatcher) { }

  ngOnInit() {
  }

}
