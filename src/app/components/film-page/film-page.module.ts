import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmPageComponent} from './film-page.component';
import {SharedModule} from '../../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {VimeModule} from '@vime/angular';



@NgModule({
  declarations: [FilmPageComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    VimeModule
  ],
  exports: [FilmPageComponent]
})
export class FilmPageModule { }
