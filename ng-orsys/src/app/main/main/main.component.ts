import { Component, OnInit } from '@angular/core';
import { StateSubscriber, Notify } from '../../@models/abstract/state-connector';
import { ApplicationDispatcher } from '../../@models/abstract/application-dispatcher';
import { ApplicationNotifier } from '../../@models/abstract/application-notifier';
import { StorageService, Storage } from '../../@services/nfr/storage.service';
import { tap, map } from 'rxjs/operators';
import { News } from '../../@models/classes/news';


@StateSubscriber
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(storage:StorageService) {
    console.log(storage);

    const demo = storage.create('toto', Storage.LOCAL);
    demo.create('Zero + Zero').subscribe( data => console.log('demo',data))

    const reddit = storage.create('reddit', Storage.HTTP);
    reddit.read({url:'http://www.reddit.com/r/angular.json'})
          .pipe( map( toNews ) )
          .pipe( tap( data => console.table(data)) )
          .subscribe( data => console.warn('done'))

    console.log(this.init('Punk is no dead'))
  }

  @Notify('🤘 GOTCHA 🤘')
  init(msg:string){
    return msg + '!!!'
  }

  ngOnInit() {
  }

}

const toNews = (response:any): News[] => {
  const news =  response.data.children ;
  return news.map( item => ({ title:item.data.title,
      link:item.data.url,
      picture:item.data.thumbnail,
      text:item.data.selftext
    })) 
}
