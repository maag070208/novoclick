import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AperitivoComponent } from './aperitivo.component';

describe('AperitivoComponent', () => {
  let component: AperitivoComponent;
  let fixture: ComponentFixture<AperitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AperitivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AperitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
