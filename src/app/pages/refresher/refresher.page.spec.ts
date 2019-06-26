import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefresherPage } from './refresher.page';

describe('RefresherPage', () => {
  let component: RefresherPage;
  let fixture: ComponentFixture<RefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefresherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
