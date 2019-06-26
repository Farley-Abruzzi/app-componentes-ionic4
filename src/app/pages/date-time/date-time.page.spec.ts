import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePage } from './date-time.page';

describe('DateTimePage', () => {
  let component: DateTimePage;
  let fixture: ComponentFixture<DateTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
