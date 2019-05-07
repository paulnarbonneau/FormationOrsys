import { Directive, Input, HostBinding, HostListener, ElementRef, Attribute, Renderer2 } from '@angular/core';

@Directive({
  selector: 'app-cmp-button[appHoverZoom],img[appHoverZoom]'
})
export class HoverZoomDirective {

  @Input() appHoverZoom;
  @HostBinding('style.transform') transform;
  @HostBinding('style.transition') transition= 'transform .3s ease';
  @HostBinding('style.display') display = 'block';


@HostListener('window:keyup', ['$event'])
zoomOnKey(event : KeyboardEvent)
{
  console.log(event);
}

  @HostListener('mouseenter')
  zoomIn(){
    this.transform = 'scale(1.2)';
    console.log(123)
  }

  @HostListener('mouseout')
  @HostListener('mouseleave')
  zoomOut(){
    this.transform = 'scale(1)';
  }


  constructor(
    @Attribute('src') src,
     private render:Renderer2,
     private elm:ElementRef
   ) {
     
   console.warn(elm.nativeElement);
   console.log('app-cmp-button[appHoverZoom]')
 }
}

@Directive({
  selector: 'img[appHoverZoom]'
})
export class ImageHoverZoomDirective {

  @Input() appHoverZoom;

  constructor() { 
    console.log('img[appHoverZoom]')
  }

}