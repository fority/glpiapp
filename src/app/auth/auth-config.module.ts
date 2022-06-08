// import { NgModule } from '@angular/core';
// import { AuthModule } from 'angular-auth-oidc-client';
// import { environment } from 'src/environments/environment';

// @NgModule({
//   imports: [
//     AuthModule.forRoot({
//       config: {
//         authority: 'https://idserver.dkcorp.com',
//         redirectUrl: environment.OidcBaseUrl + '/authcallback',
//         postLogoutRedirectUri: environment.OidcBaseUrl,
//         clientId: 'CPIApp',
//         scope: 'openid profile email roles offline_access CPIApp.API skoruba_identity_admin_api',
//         responseType: 'code',
//         silentRenew: true,
//         useRefreshToken: true,
//         renewTimeBeforeTokenExpiresInSeconds: 30,
//       },
//     }),
//   ],
//   exports: [AuthModule],
// })
// export class AuthConfigModule {}
