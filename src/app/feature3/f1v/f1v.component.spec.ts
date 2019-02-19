import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1vComponent } from './f1v.component';

describe('F1vComponent', () => {
  let component: F1vComponent;
  let fixture: ComponentFixture<F1vComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1vComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
