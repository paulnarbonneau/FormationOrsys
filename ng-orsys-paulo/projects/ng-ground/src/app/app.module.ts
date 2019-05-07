import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScreensModule } from './screens/screens.module';
import { LoginModule } from './features/login/login.module';
import { ListModule } from './features/list/list.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main/main.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    MainModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
