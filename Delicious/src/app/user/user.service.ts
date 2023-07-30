import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';

let apiUrl = environment.appUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{

  user: User | undefined | null;
  //USER_KEY = '[user]';

  private user$$ = new BehaviorSubject<undefined | null | User>(undefined);
  user$ = this.user$$.asObservable();

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    /*try {
     const lsUser =  localStorage.getItem(this.USER_KEY) || "";
     this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }*/
   this.subscription = this.user$.pipe(
    filter((val): val is User | null => val !== undefined))
    .subscribe(user => {
        this.user = user;
    })
  }

  register(email: string, username: string, password: string, rePassword: string) {

    return this.http.post<any>('/users/register', { email, username, password, rePassword })
   
  }

  login(email: string, password: string) {
    //TODO user is not real
    /*this.user = {
      email: 'john@email.com',
      firstName: 'John',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))*/
    return this.http.post<any>('/users/login', { email, password })
      .pipe(tap(user => {
        
        localStorage.setItem('token', user.accessToken);
        this.user$$.next(user)
      })
      )
  }

  getProfile() {
    return this.http.get<User>('users/profile')
    .pipe(tap(user => this.user$$.next(user)));;
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
