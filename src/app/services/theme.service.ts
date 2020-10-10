import { Injectable } from '@angular/core';

export enum ColorTheme {
  theme1 = 'theme-1'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  defaultThemeName: string = ColorTheme.theme1;
  constructor() {
    document.getElementsByTagName('body')[0].className += ` ${this.defaultThemeName}`;
  }

  changeTheme(newTheme: ColorTheme): void {
    throw Error('Not implementation method called');
  }
}
