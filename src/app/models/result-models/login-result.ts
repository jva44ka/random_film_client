import {Error} from '../error';

export class LoginResult {
  loggedIn: boolean;
  accessToken: string;
  userName: string;
  userId: string;
  errorMessage: string;
  errors: Error[]
}
