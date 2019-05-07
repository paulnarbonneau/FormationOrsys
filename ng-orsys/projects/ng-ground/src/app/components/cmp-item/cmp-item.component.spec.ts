import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpItemComponent } from './cmp-item.component';

describe('CmpItemComponent', () => {
  let component: CmpItemComponent;
  let fixture: ComponentFixture<CmpItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
