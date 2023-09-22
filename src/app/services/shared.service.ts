import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  set OriginUrl(value: string) {
    localStorage.setItem('OriginUrl', value);
  }

  get OriginUrl() {
    return localStorage.getItem('OriginUrl') || '';
  }

  set SessionToken(value: string) {
    localStorage.setItem('SessionToken', value);
  }

  get SessionToken() {
    return localStorage.getItem('SessionToken') || '';
  }
}
