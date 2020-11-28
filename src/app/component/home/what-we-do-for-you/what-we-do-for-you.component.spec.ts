import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoForYouComponent } from './what-we-do-for-you.component';

describe('WhatWeDoForYouComponent', () => {
  let component: WhatWeDoForYouComponent;
  let fixture: ComponentFixture<WhatWeDoForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
