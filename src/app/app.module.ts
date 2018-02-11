import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

export const firebaseConfig = {
  apiKey: 'AIzaSyBfK8GaoLCvNtczlE1X8xylqRmIn7zuums',
  authDomain: 'chatapp-685ed.firebaseapp.com',
  databaseURL: 'https://chatapp-685ed.firebaseio.com',
  projectId: 'chatapp-685ed',
  storageBucket: 'chatapp-685ed.appspot.com',
  messagingSenderId: '873440199024'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
