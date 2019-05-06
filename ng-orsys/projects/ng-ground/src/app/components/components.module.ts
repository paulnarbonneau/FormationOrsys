import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpButtonComponent } from './cmp-button/cmp-button.component';
import { CmpHeaderComponent } from './cmp-header/cmp-header.component';
import { CmpSearchbarComponent } from './cmp-searchbar/cmp-searchbar.component';

@NgModule({
  declarations: [CmpButtonComponent, CmpHeaderComponent, CmpSearchbarComponent],
  imports: [
    CommonModule
  ],
  exports: [CmpHeaderComponent, CmpSearchbarComponent]
})
export class ComponentsModule { }
