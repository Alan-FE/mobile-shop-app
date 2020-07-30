import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA9Hi61h4c60In_aiNS6QYTNAOMeolb_Bw",
    authDomain: "mobile-shop-9d9d2.firebaseapp.com"
    });
  }
}
