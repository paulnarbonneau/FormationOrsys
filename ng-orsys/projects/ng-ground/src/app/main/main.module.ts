import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ScreensModule } from '../screens/screens.module';
import { LoginModule } from '../features/login/login.module';
import { ListModule } from '../features/list/list.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ScreensModule,
    LoginModule,
    ListModule,
    SharedModule,
    MainRoutingModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
