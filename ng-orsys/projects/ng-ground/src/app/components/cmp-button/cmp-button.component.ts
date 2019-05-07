import { Component, OnInit, ViewChild } from '@angular/core';
import { HoverZoomDirective } from '../hover-zoom.directive';

@Component({
  selector: 'app-cmp-button',
  template: `
    <div [appHoverZoom] #hover="HoverZoom" (click)="hover.zoomIn()">
      {{title}}  
      <strong><ng-content select=".info"></ng-content></strong>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CmpButtonComponent  {

  // @ViewChild('hover') hover;
  @ViewChild(HoverZoomDirective) hover;

  title = 123;

  constructor() { }

  ngAfterViewInit() {

    console.warn(456, this.hover);
  }

}
