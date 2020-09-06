import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YearPipe} from './pipes/year-pipe.pipe';
import { FilmLikesPanelComponent } from './components/film-likes-panel/film-likes-panel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [YearPipe, FilmLikesPanelComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    YearPipe,
    FilmLikesPanelComponent
  ]
})
export class SharedModule { }
