import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmPageComponent} from './film-page.component';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [FilmPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [FilmPageComponent]
})
export class FilmPageModule { }
