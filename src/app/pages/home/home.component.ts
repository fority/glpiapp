import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SessionToken } from 'src/app/shared/models/authModel';
import { User } from 'src/app/shared/models/userModel';

import { BasicService } from './../../services/basic.service';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  listOfUser$: Observable<User[]>;
  token = {} as SessionToken;
  constructor(private basicService: BasicService, private authService: AuthService, private sharedService: SharedService) {
    this.listOfUser$ = this.Get();
  }

  ngOnInit(): void {
    this.authService.GetSessionToken().subscribe((data: any) => {
      this.token = data;
      this.sharedService.SessionToken = this.token.session_token;
    });
  }

  Get() {
    return this.basicService.Get();
  }
}
