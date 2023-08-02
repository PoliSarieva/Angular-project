import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UserService } from "./user/user.service";

const apiUrl = environment.apiUrl;

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    
    constructor(private userService: UserService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.token;
        if(req.url.startsWith('/users')) {
            req = req.clone({ url: req.url.replace('/users', apiUrl),
            
            //headers: req.headers.set('X-Authorization', this.userService.token)
            //setHeaders: {'X-Authorization': this.userService.token}
                              
        })
        }

        if (token) {
            req = req.clone({
                headers: req.headers.set('X-Authorization', this.userService.token)
            })
        }
        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};