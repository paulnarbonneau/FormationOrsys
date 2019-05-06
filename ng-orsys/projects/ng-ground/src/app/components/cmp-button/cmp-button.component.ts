import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cmp-button',
  template: `
    <button>
      <strong><ng-content select=".info"></ng-content></strong>
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class CmpButtonComponent implements OnInit {

  constructor(private render:Renderer2,private elm:ElementRef) { 


  }

  ngOnInit() {
    console.groupCollapsed('Directive Bouton')
    console.log(`elm = ${JSON.stringify(this.elm.nativeElement)}`);
    console.groupEnd();
  }

}
