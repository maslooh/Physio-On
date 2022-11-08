import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignedIn: boolean = false;
  constructor(private auth: Auth) {}

  signIn(signInValue: any) {
    return signInWithEmailAndPassword(
      this.auth,
      signInValue.email,
      signInValue.password
    );
  }
}
