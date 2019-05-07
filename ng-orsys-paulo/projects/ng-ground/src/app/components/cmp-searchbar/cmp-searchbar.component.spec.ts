import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpSearchbarComponent } from './cmp-searchbar.component';

describe('CmpSearchbarComponent', () => {
  let component: CmpSearchbarComponent;
  let fixture: ComponentFixture<CmpSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
