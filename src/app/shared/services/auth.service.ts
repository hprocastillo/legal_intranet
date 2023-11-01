import {Injectable} from '@angular/core';
import {Auth, User, signInWithEmailAndPassword, signOut, authState} from "@angular/fire/auth";
import {EMPTY, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null> = EMPTY;

  constructor(private auth: Auth) {
    if (auth) {
      this.user$ = authState(this.auth);
    }
  }

  async login({email, password}: any) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
