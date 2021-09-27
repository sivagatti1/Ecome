import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shits2Component } from './shits2.component';

describe('Shits2Component', () => {
  let component: Shits2Component;
  let fixture: ComponentFixture<Shits2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shits2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shits2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
