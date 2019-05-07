import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { StateSubscriber, Notify } from '../../@models/abstract/state-connector';
import { StorageService } from '../../@services/nfr/storage.service';
import { ApplicationDispatcher } from 'src/app/@models/abstract/application-dispatcher';
import { ActionCreators } from 'src/app/@services/dispatcher.service';
import { NNews } from 'src/app/@models/interface/news';
import { Subscription } from 'rxjs';


//@StateSubscriber
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends ApplicationDispatcher implements OnInit,OnDestroy {


  demo = 'hello';
  news:NNews[];
  news$ : Subscription;

  constructor() {
    super();
    let i =0;
    setInterval( ()=> this.demo += String(i++), 2500)

    // pour reactiver le render apres 10s
    //setTimeout( ()=> cd.markForCheck() , 10000)

  }

  @Notify('🤘 GOTCHA 🤘')
  init(msg:string){
    return msg + '!!!'
  }

  getNews(){
    this.dispatcher.dispatch(new ActionCreators.GetNews())
  }
  ngOnInit() {
    this.news$ = this.dispatcher.store.subscribe( data => this.news = data);

  }

  ngOnDestroy(): void {
    this.news$.unsubscribe();
  }

}
