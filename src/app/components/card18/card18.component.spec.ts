import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card18Component } from './card18.component';

describe('Card18Component', () => {
  let component: Card18Component;
  let fixture: ComponentFixture<Card18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Card18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
