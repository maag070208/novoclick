import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoyosComponent } from './hoyos.component';

describe('HoyosComponent', () => {
  let component: HoyosComponent;
  let fixture: ComponentFixture<HoyosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoyosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoyosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
