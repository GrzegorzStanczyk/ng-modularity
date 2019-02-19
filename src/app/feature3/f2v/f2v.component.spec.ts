import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F2vComponent } from './f2v.component';

describe('F2vComponent', () => {
  let component: F2vComponent;
  let fixture: ComponentFixture<F2vComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F2vComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F2vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
