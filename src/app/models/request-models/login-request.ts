export class LoginRequest {
  public usernameOrEmail: string;
  public password: string;

  constructor(usernameOrEmail: string, password: string){
    this.usernameOrEmail = usernameOrEmail;
    this.password = password;
  }
}
