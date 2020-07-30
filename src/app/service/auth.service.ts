import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (response) => {
        alert("You are register now, please sign in")
      }
    ).catch(
      error => {
        if(error.a === null) {
          alert("The email address is already in use by another account")
        }
      }
    )
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/']); 
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          )
      }
    ).catch(
      error => { console.log(error);
        if(error.a === null) {
          alert("Your email address and password are incorrect");
        }
       }
    )
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
