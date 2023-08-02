import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subscription, catchError, filter, tap } from 'rxjs';

let apiUrl = environment.appUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  user: User | undefined | null;

  private user$$ = new BehaviorSubject<undefined | null | User>(undefined);
  public user$ = this.user$$.asObservable();

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
   const token = localStorage.getItem('token') || "";
   this.subscription = this.user$.pipe(
    filter((val): val is User | null => val !== undefined))
    .subscribe((user: any): any => {
        this.user = user;
    })
  }

  //token = localStorage.getItem('token') || "";

get token() {
  return localStorage.getItem('token')|| "";
}

  register(email: string, username: string, password: string, rePassword: string) {

    return this.http.post<any>('/users/register', { email, username, password, rePassword })
    .pipe(tap((user: any): any => this.user$$.next(user)))
  }

  login(email: string, password: string) {
    
    return this.http.post<User>('/users/login', { email, password })
      .pipe(tap((user: any): any => {
        localStorage.setItem('token', user.accessToken);
        this.user$$.next(user)
      })
      )
  }

  getProfile() {
    return this.http.get<User>('/users/me')
    .pipe(tap((user: any): any => this.user$$.next(user))
    /*catchError((err: any): any => {
      this.user$$.next(null);
      return [err];
    })*/
    
    );;
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
