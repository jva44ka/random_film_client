import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YearPipe} from './pipes/year-pipe.pipe';
import { FilmLikesPanelComponent } from './components/film-likes-panel/film-likes-panel.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from '../services/http-interceptor.service';

@NgModule({
  declarations: [YearPipe, FilmLikesPanelComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
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
    FilmLikesPanelComponent
  ]
})
export class SharedModule { }
