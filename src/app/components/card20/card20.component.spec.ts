import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card20Component } from './card20.component';

describe('Card20Component', () => {
  let component: Card20Component;
  let fixture: ComponentFixture<Card20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Card20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
