import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliarioComponent } from './inmobiliario.component';

describe('InmobiliarioComponent', () => {
  let component: InmobiliarioComponent;
  let fixture: ComponentFixture<InmobiliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmobiliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
