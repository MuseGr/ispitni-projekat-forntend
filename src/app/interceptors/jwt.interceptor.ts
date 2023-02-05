import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injector, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private injector: Injector,
        private router: Router,
        public authService: AuthService,
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        if (localStorage.getItem("id_token") != null) {
            authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
                    .append('Access-Control-Allow-Origin', '*')
            });
        }
        return next.handle(authReq).pipe(
            tap(
                () => { },
                error => console.error(error)
            ));
    }

}
