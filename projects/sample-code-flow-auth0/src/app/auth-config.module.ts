import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        // authority: 'https://dev-damienbod.eu.auth0.com',
        authority: 'https://dev-od3saiv7.us.auth0.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'rgB8qeaJNIdSf0qDMAY2LHNqPQFVHyHO',
        scope: 'openid profile offline_access auth0-user-api-spa',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        // customParamsAuthRequest: {
        //   audience: 'https://auth0-api-spa',
        // },
        customParamsRefreshTokenRequest: {
          scope: 'openid profile offline_access auth0-user-api-spa',
        },
      },
    }),
  ],
  providers: [
    // { provide: AbstractSecurityStorage, useClass: MyStorageService },
    // { provide: AbstractLoggerService, useClass: MyLoggerService },
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
