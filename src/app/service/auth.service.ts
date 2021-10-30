import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject(false);
  isAuthenticated$: Observable<boolean> = this._isLoggedIn.asObservable();
  username = 'test';
  password = 'test';

  constructor(private router: Router) {}

  loginUser(username, password) {
    if (this.username === username && this.password === password) {
      this._isLoggedIn.next(true);
      return of(true);
    } else {
      this._isLoggedIn.next(false);
      return of(false);
    }
  }

  signout() {
    this._isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
