import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD5eTQnU6gHqWwvB3DCBKbeyw0X2uj2KEg",
      authDomain: "ng-recipe-book-3a584.firebaseapp.com",
    });
  }

}
