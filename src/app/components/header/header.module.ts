import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent]
})
export class HeaderModule { }
