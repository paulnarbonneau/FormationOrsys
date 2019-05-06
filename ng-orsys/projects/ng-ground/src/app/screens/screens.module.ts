import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenLoginComponent } from './screen-login/screen-login.component';
import { ScreenListComponent } from './screen-list/screen-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ScreenLoginComponent, ScreenListComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [ScreenLoginComponent, ScreenListComponent]
})
export class ScreensModule { }
