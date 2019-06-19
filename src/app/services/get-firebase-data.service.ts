import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetFirebaseDataService {

  constructor(private firestore: AngularFirestore) { }

  getBets(){
    return this.firestore.collection('users').snapshotChanges()
  }
}
