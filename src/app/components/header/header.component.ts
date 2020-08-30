import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  loginResultSub: Subscription;

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  constructor(public authService: AuthService){}

  ngOnInit(): void {
    this.loggedIn = !!this.authService.getAccessToken();
    this.loginResultSub = this.authService.loginEvent$.subscribe(res => {
      this.loggedIn = res?.loggedIn;
    });
  }

  logout(): void {
    this.authService.logout();
    this.menuTrigger?.closeMenu();
  }

}
