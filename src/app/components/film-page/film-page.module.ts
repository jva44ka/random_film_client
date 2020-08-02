import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmPageComponent} from './film-page.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [FilmPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FilmPageComponent]
})
export class FilmPageModule { }
