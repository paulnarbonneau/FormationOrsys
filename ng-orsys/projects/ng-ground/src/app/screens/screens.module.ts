import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenLoginComponent } from './screen-login/screen-login.component';
import { ScreenListComponent } from './screen-list/screen-list.component';

@NgModule({
  declarations: [ScreenLoginComponent, ScreenListComponent],
  imports: [
    CommonModule
  ],
  exports: [ScreenLoginComponent, ScreenListComponent]
})
export class ScreensModule { }
