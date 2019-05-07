import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpButtonComponent } from './cmp-button/cmp-button.component';
import { CmpHeaderComponent } from './cmp-header/cmp-header.component';
import { CmpSearchbarComponent } from './cmp-searchbar/cmp-searchbar.component';
import { HoverZoomDirective } from './hover-zoom.directive';
import { CmpItemComponent } from './cmp-item/cmp-item.component';

@NgModule({
  declarations: [CmpButtonComponent, CmpItemComponent, CmpHeaderComponent, CmpSearchbarComponent, HoverZoomDirective],
  imports: [
    CommonModule
  ],
  exports: [CmpButtonComponent, CmpItemComponent, CmpHeaderComponent, CmpSearchbarComponent, HoverZoomDirective]
})
export class ComponentsModule { }
