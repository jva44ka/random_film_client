import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmPageComponent} from './film-page.component';



@NgModule({
  declarations: [FilmPageComponent],
  imports: [
    CommonModule
  ],
  exports: [FilmPageComponent]
})
export class FilmPageModule { }
