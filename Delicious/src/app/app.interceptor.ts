import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError, of, switchMap, take, tap, throwError, zip } from "rxjs";
import { environment } from "src/environments/environment";
import { UserService } from "./user/user.service";
import { Router } from "@angular/router";

const apiUrl = environment.apiUrl;

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    
    constructor(private userService: UserService, private router: Router) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith('/users')) {
            req = req.clone({ url: req.url.replace('/users', apiUrl),
        })
    }
    
    if (this.userService.isLogged) {
        const token = this.userService.token;
            req = req.clone({
                /*setParams: {
                    auth: token ?? "",
                },*/
                headers: req.headers.set('X-Authorization', 
                this.userService.token)
            });
        }
        return next.handle(req)/*.pipe(
            catchError(err => of(err).pipe(
                switchMap((err) => {
                    if (err.status === 401) {
                        return [[err, null]]
                    }
                    return zip([err], this.userService.user$).pipe(take(1));
                }),
                switchMap(([err, user]) => {
                    if(err.status === 401) {
                        if (!user) {
                            this.router.navigate(['/login']);
                        } else {
                            this.router.navigate(['/']);
                        }
                    } else {
                        this.router.navigate(['/error']);
                    }
                    return throwError(() => err)
                })
            ))
        )*/
        
        
        
        
        
        
        /*.pipe(
            tap(() => {
                console.log("intercept");
            }),
            catchError((error: HttpErrorResponse) => {
                console.log("[Interceptor Error]", error);
                if(error.status === 401) {
                    this.userService.logout();
                    this.router.navigate(["login"], {
                        queryParams: {
                            authFailed: true,
                        },
                    });
                }
                return throwError(error);
            })
        )*/
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};