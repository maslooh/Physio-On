import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Timestamp } from 'firebase/firestore';
import { ClinicLocation } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LoactionsService {
  locations: ClinicLocation[];

  constructor(
    private afs: AngularFirestore,
    public storage: AngularFireStorage
  ) {}

  GetLocationsList() {
    const locationsCollection = this.afs.collection<ClinicLocation>(
      'locations',
      (ref) => ref.orderBy('lastModified')
    );
    return locationsCollection.valueChanges({ idField: 'id' });
  }

  getLocationById(id: string | null) {
    let locationDoc = this.afs.doc<ClinicLocation>(`locations/${id}`);
    return locationDoc.valueChanges({ idField: 'id' });
  }

  updateLocation(location: ClinicLocation) {
    let locationDoc = this.afs.doc<ClinicLocation>(`locations/${location.id}`);
    location.lastModified = Timestamp.fromDate(new Date());
    return locationDoc.update(location);
  }

  addLocation(location: ClinicLocation) {
    location.lastModified = Timestamp.fromDate(new Date());
    return this.afs.collection<ClinicLocation>('locations').add(location);
  }

  async uploadImage(image: File) {
    let ImageFirebasePath = new Date().getTime() + image.name;

    await this.storage
      .upload(ImageFirebasePath, image)
      .catch((err) => console.log(err));
    return ImageFirebasePath;
  }

  getURL(imagePath: string) {
    return this.storage.ref(imagePath).getDownloadURL();
  }

  deleteLocationImage(imageRef: string) {
    return this.storage.ref(imageRef).delete();
  }

  deleteLocation(location: ClinicLocation) {
    let locationDoc = this.afs.doc<ClinicLocation>(`locations/${location.id}`);
    return locationDoc.delete();
  }
}
