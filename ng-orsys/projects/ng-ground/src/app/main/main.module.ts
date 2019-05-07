import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { ScreensModule } from '../screens/screens.module';
import { LoginModule } from '../features/login/login.module';
import { ListModule } from '../features/list/list.module';
import { SharedModule } from '../shared/shared.module';
import { DispatcherService } from '../services/dispatcher.service';
import { Dispatcher } from '../@models/tokens/dispatcher';


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
  providers:[
    {provide:Dispatcher, useClass:DispatcherService}
  ],
  exports: [MainComponent]
})
export class MainModule {

 }
