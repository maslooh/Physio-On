import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignedIn: string;
  constructor(private auth: Auth) {}

  signIn(signInValue: any) {
    return signInWithEmailAndPassword(
      this.auth,
      signInValue.email,
      signInValue.password
    );
  }

  signOut() {
    this.auth.signOut();
  }

  isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }
}
