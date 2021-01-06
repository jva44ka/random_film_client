import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilePageComponent} from './profile-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfilePageModule { }
