import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBP2A4FwFxWtXMC-0ZQdX6cM8yKmVxHerA',
    authDomain: 'main-udemy.firebaseapp.com'
    });
    }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
