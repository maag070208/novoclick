import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHoyosComponent } from './carousel-hoyos.component';

describe('CarouselHoyosComponent', () => {
  let component: CarouselHoyosComponent;
  let fixture: ComponentFixture<CarouselHoyosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHoyosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHoyosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
