import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private afs: AngularFirestore) {}

  GetNewsList(lastItem: News | null = null, limit: number = 3) {
    const newsCollection = this.afs.collection<News>('news', (ref) =>
      ref.orderBy('lastModified').startAfter(lastItem).limit(limit)
    );
    return newsCollection.valueChanges({ idField: 'id' });
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
