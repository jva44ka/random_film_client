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
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {NotFoundPageModule} from './components/not-found-page/not-found-page.module';
import {RegisterPageModule} from './components/register-page/register-page.module';
import {ProfilePageModule} from './components/profile-page/profile-page.module';
import {LikedFilmsPageModule} from './components/liked-films-page/liked-films-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    FilmsPageModule,
    FilmPageModule,
    LikedFilmsPageModule,
    LoginPageModule,
    RegisterPageModule,
    ProfilePageModule,
    NotFoundPageModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
