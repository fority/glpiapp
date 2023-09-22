import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SessionToken } from '../models/authModel';
import { SharedService } from './shared.service';
import { api_token, app_token } from './token';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor, OnDestroy {
  subscription: Subscription = new Subscription();
  token = {} as SessionToken;

  constructor(private authService: AuthService, private sharedService: SharedService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      headers: request.headers.set('App-Token', app_token).set('Authorization', 'user_token ' + api_token),
    });

    if (!this.sharedService.SessionToken) {
      this.subscription = this.authService.GetSessionToken().subscribe((data: any) => {
        this.sharedService.SessionToken = data.session_token;
      });
    }

    request = request.clone({
      headers: request.headers
        .set('App-Token', app_token)
        .set('Authorization', 'user_token ' + api_token)
        .set('Session-Token', this.sharedService.SessionToken),
    });
    return next.handle(request);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
