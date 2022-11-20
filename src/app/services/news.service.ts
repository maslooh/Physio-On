import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  collection,
  getCountFromServer,
  Firestore,
  Timestamp,
} from '@angular/fire/firestore';
import { UploadMetadata } from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(
    private afs: AngularFirestore,
    private db: Firestore,
    public storage: AngularFireStorage
  ) {}

  GetNewsList( limit: number = 3,lastItem: News | null = null) {
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
    let newsItemDoc = this.afs.doc<News>(`news/${newsItem.id}`);
    newsItem.lastModified = Timestamp.fromDate(new Date());
    return newsItemDoc.update(newsItem);
  }

  addNewsItem(newsItem: News) {
    newsItem.createdOn = Timestamp.fromDate(new Date());
    newsItem.lastModified = newsItem.createdOn;
    return this.afs.collection<News>('news').add(newsItem);
  }

  async uploadImage(image: File) {
    let ImageFirebasePath = new Date().getSeconds() + image.name;
    let metaData = { imageRef: ImageFirebasePath } as UploadMetadata;
    await this.storage
      .upload(ImageFirebasePath, image, metaData)
      .catch((err) => console.log(err));
    return ImageFirebasePath;
  }

  getURL(imagePath: string) {
    return this.storage.ref(imagePath).getDownloadURL();
  }

  deleteNewsImage(imageRef: string) {
    return this.storage.ref(imageRef).delete();
  }

  deleteNewsItem(newsItem: News) {
    let newsItemDoc = this.afs.doc<News>(`news/${newsItem.id}`);
    return newsItemDoc.delete();
  }
}
