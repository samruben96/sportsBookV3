import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }
  createUser(user,amountPaid,amountWin){
    return this.db.collection('users').add({
      userName: user,
      amountBet: amountPaid,
      amountWin: amountWin
     
    });
  }
  
}
