import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3vComponent } from './f3v.component';

describe('F3vComponent', () => {
  let component: F3vComponent;
  let fixture: ComponentFixture<F3vComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3vComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
