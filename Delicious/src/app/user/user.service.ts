import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, Subscription, catchError, filter, map, tap, throwError } from 'rxjs';

let apiUrl = environment.appUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  user: User | undefined | null;
  currentUser = {};

  private user$$ = new BehaviorSubject<undefined | null | User>(undefined);
  public user$ = this.user$$.asObservable();

  /*get isLogged(): boolean {
    return !!this.user;
  }*/

  subscription: Subscription;

  constructor(private http: HttpClient) {
   const token = localStorage.getItem('token') || "";
   this.subscription = this.user$
    .subscribe((user: any): any => {
        this.user = user;
    })
  }

get token() {
  return localStorage.getItem('token')|| "";
}

get isLogged(): boolean {
  let token = localStorage.getItem('token');
  return token !== null ? true : false;
}


  register(email: string, username: string, password: string, rePassword: string) {

    return this.http.post<any>('/users/register', { email, username, password, rePassword })
    .pipe(tap((user: any): any => {
      localStorage.setItem('token', user.accessToken);
      this.user$$.next(user)
    }))
  }

  login(email: string, password: string) {
    
    return this.http.post<User>('/users/login', { email, password })
      .pipe(tap((user: any): any => {
        localStorage.setItem('token', user.accessToken);
        this.getUserProfile(user._id).subscribe((res) => {
          this.currentUser = res;
        })
        
        this.user$$.next(user)
      })
      )
  }

  getUserProfile(id: any): Observable<any> {
    return this.http.get<User>('/users/me').pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  updateProfile(username: string, email: string) {
    return this.http.put<User>('/users/me', {username, email})
      .pipe(
        tap((user: any): any => this.user$$.next(user))
      );
  }

  setProfile() {
    return this.http.get<User>('/users/me')
      .pipe(
        tap((user: any): any => this.user$$.next(user)),
        catchError((err: any): any => {
          this.user$$.next(null);
          return [err];
        }));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
