import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenLoginComponent } from '../screens/screen-login/screen-login.component';
import { ScreenListComponent } from '../screens/screen-list/screen-list.component';

const routes: Routes = [
  {
    path : 'list', component : ScreenListComponent
  },
  {
    path : 'admin', loadChildren : '../admin/admin.module#AdminModule'
  },
  {
    path : 'login',component : ScreenLoginComponent
  },
  {
    path : '**', redirectTo : 'login', pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
