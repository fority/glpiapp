import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.less'],
})
export class AuthCallbackComponent {
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    const filter = this.route.snapshot.queryParamMap.get('error');
    if (filter == 'access_denied') {
      this.router.navigate(['home']);
    }
  }
}
