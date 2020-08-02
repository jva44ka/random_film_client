import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {FilmsPageComponent} from './components/films-page/films-page.component';
import {FilmPageComponent} from './components/film-page/film-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'films',
    component: FilmsPageComponent
  },
  {
    path: 'film/:id',
    component: FilmPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
