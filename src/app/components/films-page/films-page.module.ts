import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsPageComponent} from './films-page.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [FilmsPageComponent, FilmItemComponent, FilmListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FilmsPageComponent]
})
export class FilmsPageModule { }
