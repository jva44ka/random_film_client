import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {MatMenu} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  loginResultSub: Subscription;

  @ViewChild('loggedInMenu') loggedInMenu: MatMenu;

  constructor(public authService: AuthService){}

  ngOnInit(): void {
    this.loggedIn = !!this.authService.getAccessToken();
    this.loginResultSub = this.authService.loginEvent$.subscribe(res => {
      console.log('LoginEvent callback: ' + JSON.stringify(res));
      this.loggedIn = res?.loggedIn;
    });
  }

  logout(): void {
    this.authService.logout();
    console.log(this.loggedInMenu);
    //this.loggedInMenu.closed = true;
  }

}
