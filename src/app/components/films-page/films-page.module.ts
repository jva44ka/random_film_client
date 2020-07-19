import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsPageComponent} from './films-page.component';



@NgModule({
  declarations: [FilmsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [FilmsPageComponent]
})
export class FilmsPageModule { }
