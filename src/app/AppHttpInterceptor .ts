
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { LoginComponent } from './login/login.component';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = window.localStorage.getItem('access_token');
        //if (token != undefined || token != '') {
        //    req.headers.append('x-access-token', `${ token }` );
        //}

        const modifiedReq = req.clone({

            headers: req.headers.set('x-access-token', `${token}`),

        });

        return next.handle(modifiedReq).pipe(catchError(err => {
            if (err.status === 401) {
                location.reload(true);
            }

            return throwError(err);
        }))
    }
}
