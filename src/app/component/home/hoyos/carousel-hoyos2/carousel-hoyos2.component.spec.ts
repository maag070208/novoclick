import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHoyos2Component } from './carousel-hoyos2.component';

describe('CarouselHoyos2Component', () => {
  let component: CarouselHoyos2Component;
  let fixture: ComponentFixture<CarouselHoyos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHoyos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHoyos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
