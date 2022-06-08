import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  SuccessNotice(message: string): void {
    this.notification.create('success', 'Successful', message, { nzDuration: 2000 });
  }
  HttpErrorNotice(message: string): void {
    this.notification.create('warning', 'HttpError', message, { nzDuration: 3000 });
  }
  WarningNotice(message: string): void {
    this.notification.create('warning', 'Warning', message, { nzDuration: 3000 });
  }
  ErrorNotice(message: string): void {
    this.notification.create('error', 'Error', message, { nzDuration: 3000 });
  }
  Notice(): void {}
}
