import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainPageModule} from './components/main-page/main-page.module';
import {FilmsPageModule} from './components/films-page/films-page.module';
import {FilmPageModule} from './components/film-page/film-page.module';
import {LoginPageModule} from './components/login-page/login-page.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    FilmsPageModule,
    FilmPageModule,
    LoginPageModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
