import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceTransStatus',
})
export class ServiceTransStatusPipe implements PipeTransform {
  transform(data: number | null) {
    switch (data) {
      case 10: {
        return 'OPEN';
      }
      case 20: {
        return 'ASSIGNED';
      }
      case 30: {
        return 'ACCEPTED';
      }
      case 40: {
        return 'CLOSED';
      }
      case 45: {
        return 'VERIFIED';
      }
      case 50: {
        return 'WAITING';
      }
      case 90: {
        return 'CANCELED';
      }
      default: {
        return 'NIL';
      }
    }
  }
}
