import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserTitle } from '../models/userModel';
import { SharedService } from './shared.service';
import { app_token } from './token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'App-Token': app_token }),
};

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  constructor(private httpClient: HttpClient, private sharedService: SharedService) {}

  Get(itemType: string = 'User', isActive: string = '1'): Observable<User[]> {
    httpOptions.headers = httpOptions.headers.set('Session-Token', this.sharedService.SessionToken);
    return this.httpClient
      .get<User[]>(
        `${environment.apiBaseUrl}/${itemType}/?expand_dropdowns=true&range=0-800&searchText[is_active]=^${isActive}$`,
        httpOptions
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  GetUserTitles() {
    httpOptions.headers = httpOptions.headers.set('Session-Token', this.sharedService.SessionToken);
    return this.httpClient.get<UserTitle[]>(`${environment.apiBaseUrl}/UserTitle/?range=0-500`, httpOptions).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
