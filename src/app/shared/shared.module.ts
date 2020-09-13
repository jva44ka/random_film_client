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

@NgModule({
  declarations: [
    YearPipe,
    FilmLikesPanelComponent,
    ModalWindowComponent,
    ModalWindowDialogComponent,
    ModalWindowButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
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
    ModalWindowComponent
  ]
})
export class SharedModule { }
