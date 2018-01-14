import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthSerice {
  token: string;
  loggedIn = false;

  constructor(private router: Router){

  }

  signupUser(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .catch(
    error => console.log(error)
  );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
        .then(
          (token: string) => this.token = token
        );
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
    this.loggedIn = false;
  }

  getToken() {
   firebase.auth().currentUser.getToken()
   .then(
    (token: string) => this.token = token
  );
  return this.token;
  }

  // isAuth() {
  //   return this.token  != null;
  // }
}
