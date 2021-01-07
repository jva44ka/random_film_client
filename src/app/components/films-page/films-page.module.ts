import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsPageComponent} from './films-page.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [FilmsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [FilmsPageComponent]
})
export class FilmsPageModule { }
