import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from './main-page.component';
import {SharedModule} from '../../shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DragScrollModule} from 'ngx-drag-scroll';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    DragScrollModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
