import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSerice: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const copiedReq =   req.clone({headers: req.headers.set('', '')});
    const copiedReq =   req.clone({params: req.params.set('auth', this.authSerice.getToken())});
    console.log('Intercepted!', req);
    return next.handle(copiedReq);
  }
}
