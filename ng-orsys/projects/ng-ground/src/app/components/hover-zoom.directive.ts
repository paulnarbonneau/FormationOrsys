import { Directive, Input, HostBinding, HostListener, Renderer2, ElementRef, ViewChild, AfterViewInit, Host } from '@angular/core';
import { Attribute } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { CmpButtonComponent } from './cmp-button/cmp-button.component';

@Directive({
  selector: 'div[appHoverZoom],app-cmp-button[appHoverZoom],img[appHoverZoom]',
  exportAs: 'HoverZoom'
})
export class HoverZoomDirective implements AfterViewInit {

  @Input() appHoverZoom;
  @HostBinding('style.transform') transform;
  @HostBinding('style.transition') transition = 'transform .3s ease';
  @HostBinding('style.display') display = 'block';

  // @ViewChild(CmpButtonComponent) button;

  @HostListener('window:keyup')
  zoomOnKey(){
    this.zoomIn();
  }

  // @HostListener('mouseenter')
  zoomIn(){
    this.transform = 'scale(1.2)';
    console.log(123)
  }

  // @HostListener('mouseout')
  // @HostListener('mouseleave')
  zoomOut(){
    this.transform = 'scale(1)';
  }


  constructor(
     @Attribute('src') src,
      private render:Renderer2,
      private elm:ElementRef
    ) {
      
    console.warn(elm.nativeElement) 
    const h1 = this.render.createElement('h1');
    h1.innerHTML = 'Hello';

    this.render.appendChild(this.elm.nativeElement,h1);
    console.log('app-cmp-button[appHoverZoom]')
  }

  ngAfterViewInit(){
    console.warn(123,/* this.button */);
  }

}

@Directive({
  selector: 'toto[appHoverZoom]'
})
export class ImageHoverZoomDirective {

  @Input() appHoverZoom;

  constructor() { 
    console.log('img[appHoverZoom]')
  }

}