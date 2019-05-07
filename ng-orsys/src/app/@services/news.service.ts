import { Injectable } from '@angular/core';
import { StorageService, Storage } from './nfr/storage.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { NNews } from '../@models/interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private storage: StorageService) { }

  getNews(topic = 'angular') {

    const savedNews = this.storage.create('SavedNews', Storage.LOCAL);

    const reddit = this.storage.create('reddit', Storage.HTTP);
    return reddit.read({ url: `http://www.reddit.com/r/${topic}.json` })
      .pipe(map(toNews))
      .pipe(switchMap(savedNews.create))
      .pipe(tap(data => console.table(data)))
  }
}


const toNews = (response: any): NNews[] => {
  const news = response.data.children;
  return news.map(item => ({
    title: item.data.title,
    link: item.data.url,
    picture: item.data.thumbnail,
    text: item.data.selftext
  }))
};