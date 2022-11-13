import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  browserSessionPersistence,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignedIn: string;
  constructor(private auth: Auth) {}

  signIn(signInValue: any) {
    if (signInValue.rememberMe)
      this.auth.setPersistence(browserLocalPersistence);
    else this.auth.setPersistence(browserSessionPersistence);
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
