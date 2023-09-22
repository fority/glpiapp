import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionToken } from '../models/authModel';
import { SharedService } from './shared.service';
import { api_token, app_token } from './token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'App-Token': app_token,
    Authorization: 'user_token ' + api_token,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private sharedService: SharedService) {}

  GetSessionToken(): Observable<SessionToken> {
    return this.httpClient.get<SessionToken>(`${environment.apiBaseUrl}/initSession?get_full_session=true`, httpOptions);
  }

  KillSessionToken() {
    httpOptions.headers = httpOptions.headers.set('Session-Token', this.sharedService.SessionToken);
    return this.httpClient.get<SessionToken>(`${environment.apiBaseUrl}/killSession`, httpOptions);
  }
}
