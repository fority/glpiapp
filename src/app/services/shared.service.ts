import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  pageIndex$ = new BehaviorSubject<number>(1);

  pageSize$ = new BehaviorSubject<number>(6);

  searchText$ = new BehaviorSubject<string>('');

  orderId$ = new BehaviorSubject<string>('');

  private base64Pdf$ = new BehaviorSubject<string>('');
  base64Pdf_ = this.base64Pdf$.asObservable();

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

  SetPageText(page: number = 1, pageSize: number = 6, searchText: string = '') {
    this.pageIndex$.next(page);
    this.pageSize$.next(pageSize);
    this.searchText$.next(searchText);
  }

  ResetPageSearch(page: number = 1, pageSize: number = 6, searchText: string = '') {
    this.pageIndex$.next(page);
    this.pageSize$.next(pageSize);
    this.searchText$.next(searchText);
  }
}
