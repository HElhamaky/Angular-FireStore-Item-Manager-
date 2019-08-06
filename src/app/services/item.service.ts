import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable()

export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;


  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
   }

   getItems(){
     return this.items;
   }
}
