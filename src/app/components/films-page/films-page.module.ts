import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsPageComponent} from './films-page.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [FilmsPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  exports: [FilmsPageComponent]
})
export class FilmsPageModule { }
