import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikedFilmsPageComponent} from './liked-films-page.component';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [LikedFilmsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [LikedFilmsPageComponent]
})
export class LikedFilmsPageModule { }
