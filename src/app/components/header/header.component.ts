import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  loginResultSub: Subscription;

  constructor(public authService: AuthService){}

  ngOnInit(): void {
    this.loginResultSub = this.authService.loginEvent$.subscribe(res => {
      this.loggedIn = res.succeeded;
    });
  }

}
