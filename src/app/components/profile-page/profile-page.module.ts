import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from '../../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatDividerModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule { }
