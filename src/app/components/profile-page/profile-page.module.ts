import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from '../../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule { }
