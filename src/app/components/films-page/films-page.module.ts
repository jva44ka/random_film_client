import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsPageComponent} from './films-page.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [FilmsPageComponent, FilmListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [FilmsPageComponent]
})
export class FilmsPageModule { }
