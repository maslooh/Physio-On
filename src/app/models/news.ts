import { Timestamp } from '@firebase/firestore';

export interface News {
  $key: string;
  id: string;
  title: string;
  image: string;
  imageRef:string
  createdOn: Timestamp;
  lastModified: Timestamp;
  content: string;
}
