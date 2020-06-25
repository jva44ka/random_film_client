import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {FilmsPageComponent} from './components/films-page/films-page.component';


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
    component: FilmsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
