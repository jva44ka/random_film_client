import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YearPipe} from './pipes/year-pipe.pipe';
import { FilmLikesPanelComponent } from './components/film-likes-panel/film-likes-panel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../services/http-interceptor.service';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalWindowDialogComponent } from './components/modal-window/modal-window-dialog/modal-window-dialog.component';
import { ModalWindowButtonsComponent } from './components/modal-window/modal-window-buttons/modal-window-buttons.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule} from '@angular/router';
import { FilmsCarouselComponent } from './components/films-carousel/films-carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FilmsListComponent } from './components/films-list/films-list.component';
import {FilmListItemComponent} from './components/films-list/film-list-item/film-list-item.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    YearPipe,
    FilmLikesPanelComponent,
    ModalWindowComponent,
    ModalWindowDialogComponent,
    ModalWindowButtonsComponent,
    FilmsCarouselComponent,
    FilmsListComponent,
    FilmListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    DragScrollModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  exports: [
    YearPipe,
    FilmLikesPanelComponent,
    ModalWindowComponent,
    FilmsCarouselComponent,
    FilmsListComponent
  ]
})
export class SharedModule { }
