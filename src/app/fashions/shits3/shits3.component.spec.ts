import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shits3Component } from './shits3.component';

describe('Shits3Component', () => {
  let component: Shits3Component;
  let fixture: ComponentFixture<Shits3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shits3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shits3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
