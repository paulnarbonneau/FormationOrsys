import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmpButtonComponent } from './cmp-button/cmp-button.component';
import { CmpItemComponent } from './cmp-item/cmp-item.component';
import { CmpHeaderComponent } from './cmp-header/cmp-header.component';
import { CmpSearchbarComponent } from './cmp-searchbar/cmp-searchbar.component';
import { HoverZoomDirective, ImageHoverZoomDirective } from './hover-zoom.directive';

@NgModule({
  declarations: [ImageHoverZoomDirective,CmpButtonComponent, CmpItemComponent, CmpHeaderComponent, CmpSearchbarComponent, HoverZoomDirective],
  imports: [
    CommonModule
  ],
  exports: [ImageHoverZoomDirective,CmpButtonComponent, CmpItemComponent, CmpHeaderComponent, CmpSearchbarComponent, HoverZoomDirective]
})
export class ComponentsModule { }
