import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosEspecialesComponent } from './platos-especiales.component';

describe('PlatosEspecialesComponent', () => {
  let component: PlatosEspecialesComponent;
  let fixture: ComponentFixture<PlatosEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatosEspecialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatosEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
