import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, map, Observable, of, Subscription } from 'rxjs';
import { SessionToken } from 'src/app/models/authModel';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { BasicService } from './../../services/basic.service';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  subscription: Subscription = new Subscription();
  widthConfig = ['250px', '250px', '250px', '250px'];
  listOfUser$ = of([]) as Observable<User[]>;

  token = {} as SessionToken;
  listOfColumn = [
    {
      title: 'Ext No',
      compare: (a: User, b: User) => +a.phone2 - +b.phone2,
      priority: false,
    },
    {
      title: 'Department',
      compare: (a: User, b: User) => a.department.localeCompare(b.department),
      priority: 1,
    },
    {
      title: 'Name',
      compare: (a: User, b: User) => a.firstname.localeCompare(b.firstname),
      priority: 3,
    },
    {
      title: 'Title',
      compare: (a: User, b: User) => a.usertitles_id.localeCompare(b.usertitles_id),
      priority: 2,
    },
  ];

  constructor(private basicService: BasicService, private authService: AuthService, private sharedService: SharedService) {}

  async ngOnInit() {
    await this.GetToken().then(() => {
      this.listOfUser$ = this.Get().pipe(
        map((response) => [
          ...response.map((res) => ({
            ...res,
            phone2: res.phone2 || '0',
            department: res.department || '',
            firstname: res.firstname || '',
            usertitles_id: res.usertitles_id || '',
          })),
        ]),

        map((response) => {
          return response
            .filter((item) => item.phone2 !== null && item.phone2 !== '' && item.phone2 !== '0' && item.phone2 !== undefined)
            .sort((a, b) => {
              if (a.department < b.department) {
                return -1;
              }
              if (a.department > b.department) {
                return 1;
              }
              return 0;
            });
        })
        // tap((item) =>
        //   console.log(
        //     '🚀 ',
        //     item.find((res) => res.firstname == 'UserA')
        //   )
        // )
      );
    });
  }

  // Get() {
  //   return this.basicService.Get().pipe(
  //     mergeMap((respondA) =>
  //       this.basicService.GetUserTitles().pipe(
  //         map((respondB) => {
  //           respondA.forEach((user) => (user.usertitles = respondB.find((title) => title.id == +user.usertitles_id)));
  //           return respondA;
  //         })
  //       )
  //     )
  //   );
  // }

  Get() {
    return this.basicService.Get().pipe(
      map((respond) => {
        respond.forEach((user) => (user.department = this.GetDepartment(user.user_dn)));
        return respond;
      })
    );
  }

  ReturnEmail(name: string) {
    return `${name}@dk-schweizer.com`;
  }

  async GetToken() {
    const data = await lastValueFrom(this.authService.GetSessionToken());
    this.sharedService.SessionToken = data.session_token;
  }

  GetDepartment(data: string) {
    const OU = data?.indexOf('OU=');
    return data?.substring(OU + 3, data.indexOf(',', OU));
  }

  ngOnDestroy(): void {
    // this.authService.KillSessionToken().subscribe();
    // this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.authService.KillSessionToken().subscribe();
    this.subscription.unsubscribe();
  }
}
