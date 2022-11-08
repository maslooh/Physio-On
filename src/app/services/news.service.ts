import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private afs: AngularFirestore) {}

  GetNewssList() {
    const newsCollection = this.afs.collection<News[]>('news');
    return newsCollection.valueChanges();
  }

  getNewsItemById(id: string) {
    let newsItemDoc = this.afs.doc<News>(`news/${id}`);
    return newsItemDoc.valueChanges();
  }

  updateNewsItem(newsItem: News) {
    let newsItemDoc = this.afs.doc<News>(`news/${newsItem.$key}`);
    return newsItemDoc.update(newsItem);
  }
}
