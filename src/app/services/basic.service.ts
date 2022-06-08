import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../shared/models/userModel';

const app_token = `vmRuu6CSOlmXFHVNtj9TbEP2FFd1RmpOcbxAaN5D`;
const api_token = `56OZNmtQYR6Hu2oM8l8kz37yOj15jXFtE6DvTwnh`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const ApiPath = 'User';
const DefaultPage = 1;
const DefaultPageSize = 1000;

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  constructor(private httpClient: HttpClient) {}

  Get(itemType: string = 'User', isActive: string = '1'): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiBaseUrl}/${itemType}/?expand_dropdowns=false&range=0-800&searchText[is_active]=^${isActive}$`, httpOptions).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
