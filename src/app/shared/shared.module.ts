import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YearPipe} from '../pipes/year-pipe.pipe';

@NgModule({
  declarations: [YearPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    YearPipe
  ]
})
export class SharedModule { }
