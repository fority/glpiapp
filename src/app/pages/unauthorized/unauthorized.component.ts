import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.less'],
})
export class UnauthorizedComponent {
  constructor(private location: Location, private router: Router) {
    console.log('UnauthorizedComponent');
  }

  BackClick() {
    this.location.back();
  }

  HomeClick() {
    this.router.navigate(['/']);
  }
}
