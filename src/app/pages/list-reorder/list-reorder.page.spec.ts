import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReorderPage } from './list-reorder.page';

describe('ListReorderPage', () => {
  let component: ListReorderPage;
  let fixture: ComponentFixture<ListReorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
