import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import OktaAuth from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthGuard, OktaAuthModule } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';


const oktaConfig = {
  clientId: '0oa1ailo2xflehiod0h8',
  issuer: 'https://flexdev.oktapreview.com',
  redirectUri: 'http://localhost:4200/login/callback',
  scopes: ['openid', 'profile', 'offline_access'],
};

const oktaAuth = new OktaAuth(oktaConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG, useFactory: (x: any) => {
        const oktaConfig = { oktaAuth };
        return oktaConfig;
      }
    },
    OktaAuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
