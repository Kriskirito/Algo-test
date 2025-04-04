import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private oktaAuth: OktaAuthStateService) { }

  ngOnInit() {
    this.login();
  }
  login() {
    this.oktaAuth.authState$.subscribe(x => {
      console.log(x.isAuthenticated);
      console.log(x);
    });
  }

  logout() {
    // this.oktaAuth.logout();
  }
}
