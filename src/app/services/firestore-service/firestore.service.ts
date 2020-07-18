import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Concert } from 'src/app/models/concert.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  concerts: Observable<Concert[]>;

  constructor(firestore: AngularFirestore) {
    this.concerts = firestore.collection('concerts').valueChanges() as Observable<Concert[]>;
  }
}
