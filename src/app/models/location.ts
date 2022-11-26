import { Timestamp } from 'firebase/firestore';

export interface ClinicLocation {
  $key: string;
  id: string;
  location: string;
  address: string;
  mobile: string;
  fax: string;
  telephone: string;
  email: string;
  image: string;
  imageRef: string;
  lastModified: Timestamp;
}
