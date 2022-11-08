import { Timestamp } from '@firebase/firestore';

export interface News {
  $key: string;
  title: string;
  image: string;
  createdOn: Timestamp;
  lastModified: Timestamp;
  content: string;
}
