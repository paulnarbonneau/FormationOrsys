import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];


@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
