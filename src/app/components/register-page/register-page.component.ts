import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CreateAccountRequest} from '../../models/request-models/create-account-request';
import {UserHttpService} from '../../services/api/http/user-http.service';
import {Router} from '@angular/router';
import {Error} from '../../models/error';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  email: string;
  username: string;
  password: string;
  errors: Error[];

  constructor(private authService: AuthService,
              private userHttpService: UserHttpService,
              private router: Router) {}

  onSubmit(): void {
    const req: CreateAccountRequest = new CreateAccountRequest();
    req.userName = this.username;
    req.email = this.email;
    req.password = this.password;
    req.signInAfter = false;
    this.userHttpService.registerRequest(req).subscribe(res => {
        if(res.succeeded){
          this.router.navigate(['/']);
        }
        else{
          this.errors = res.errors;
          console.error(res.errors);
        }
      },
      e => { console.error(e) }
    );
  }

}
