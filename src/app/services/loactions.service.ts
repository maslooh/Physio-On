import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { collection, Firestore } from '@angular/fire/firestore';

import { Location } from '../models/location';

@Injectable({
  providedIn: 'root',
})
export class LoactionsService {
  locations: Location[];

  constructor(
    private afs: AngularFirestore,
    private db: Firestore,
    public storage: AngularFireStorage
  ) {}

  GetLocationsList() {
    const locationsCollection = this.afs.collection<Location>('locations');
    return locationsCollection.valueChanges({ idField: 'id' });
  }
}
