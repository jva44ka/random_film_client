import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LikedFilmsPageComponent} from './liked-films-page.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [LikedFilmsPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [LikedFilmsPageComponent]
})
export class LikedFilmsPageModule { }
