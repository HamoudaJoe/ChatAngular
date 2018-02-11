import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Item {
  name: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  message = '';

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.itemsCollection = this.afs.collection('messages');
    this.items = this.itemsCollection.valueChanges();
  }

  chatSend(message) {
    this.afs.collection('messages').add({'name': 'hi', 'message': message});
    this.message = '';
  }

}
