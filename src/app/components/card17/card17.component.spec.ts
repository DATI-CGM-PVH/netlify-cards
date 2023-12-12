import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card17Component } from './card17.component';

describe('Card17Component', () => {
  let component: Card17Component;
  let fixture: ComponentFixture<Card17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Card17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
