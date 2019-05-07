import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {

  let TestMod;

  beforeEach(async(() => {
    
  }));


  fit('should create', done => {
    TestMod = createTestingModule({
      declarations: [ MainComponent ]
    });
    console.warn(TestMod.get(MainComponent))
  });

});

const createTestingModule = config => {
  TestBed.configureTestingModule(config).compileComponents();

  return {
    get(component){
      const comp = TestBed.createComponent(component);
      console.warn(123,comp)
      comp.detectChanges();
      return {
        detectChanges:comp.detectChanges,
        instance:comp.componentInstance,
        html:comp.debugElement.nativeElement,
      }
    }
  }
}
