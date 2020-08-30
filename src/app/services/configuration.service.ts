import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  //urls
  private protocol: string;
  private port: string;
  private basePath = 'localhost';
  public serverUrl: string;
  public webApiUrl: string;

  //url flags
  private areFromVS: boolean = true; // бэк приложение запускается из вижлы или из консоли dotnet run
  private isSslOn: boolean = false;

  readonly maxAccessFailedCount: number = 5;
  readonly defaultToastDelay: number = 3 * 1000;

  constructor() {
    if (environment.production) {
      console.log('change me!');
      this.basePath = 'localhost';
    } else {
      this.basePath = 'localhost';
    }

    if (this.areFromVS) {
      this.port = '64303';
    } else {
      this.port = '5000';
    }

    if (this.isSslOn) {
      this.protocol = 'https';
    } else {
      this.protocol = 'http';
    }

    this.serverUrl = `${this.protocol}://${this.basePath}:${this.port}`;
    this.webApiUrl = `${this.serverUrl}/api`;
  }
}
