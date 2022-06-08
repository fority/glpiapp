import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { SessionToken } from '../shared/models/authModel';
import { SharedService } from './shared.service';

const app_token = `vmRuu6CSOlmXFHVNtj9TbEP2FFd1RmpOcbxAaN5D`;
const api_token = `56OZNmtQYR6Hu2oM8l8kz37yOj15jXFtE6DvTwnh`;

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  token = {} as SessionToken;

  constructor(private authService: AuthService, private sharedService: SharedService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      headers: request.headers.set('App-Token', app_token).set('Authorization', 'user_token' + api_token),
      // .set('Session-Token', this.token.session_token),
    });

    if (!this.sharedService.SessionToken) {
      return next.handle(request);
    }

    request = request.clone({
      headers: request.headers
        .set('App-Token', app_token)
        .set('Authorization', 'user_token' + api_token)
        .set('Session-Token', this.sharedService.SessionToken),
    });
    return next.handle(request);
  }
}
