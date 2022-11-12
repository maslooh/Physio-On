import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  collection,
  getCountFromServer,
  Firestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private afs: AngularFirestore, private db: Firestore) {}

  GetNewsList(lastItem: News | null = null, limit: number = 3) {
    console.log(lastItem?.lastModified);
    const newsCollection = this.afs.collection<News>('news', (ref) =>
      lastItem
        ? ref
            .orderBy('lastModified', 'desc')
            .startAfter(lastItem?.lastModified)
            .limit(limit)
        : ref.orderBy('lastModified', 'desc').limit(limit)
    );
    return newsCollection.valueChanges({ idField: 'id' });
  }

  getNewsCount() {
    const newsCollection = collection(this.db, 'news');
    return getCountFromServer(newsCollection);
  }

  getNewsItemById(id: string | null) {
    let newsItemDoc = this.afs.doc<News>(`news/${id}`);
    return newsItemDoc.valueChanges({ idField: 'id' });
  }

  updateNewsItem(newsItem: News) {
    let newsItemDoc = this.afs.doc<News>(`news/${newsItem.$key}`);
    return newsItemDoc.update(newsItem);
  }
}
