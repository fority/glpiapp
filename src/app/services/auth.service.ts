import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { SessionToken } from './../shared/models/authModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  GetSessionToken(): Observable<SessionToken> {
    return this.httpClient.get<SessionToken>(`${environment.apiBaseUrl}/initSession`, httpOptions);
  }
}
