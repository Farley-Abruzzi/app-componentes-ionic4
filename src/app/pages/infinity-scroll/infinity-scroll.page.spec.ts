import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityScrollPage } from './infinity-scroll.page';

describe('InfinityScrollPage', () => {
  let component: InfinityScrollPage;
  let fixture: ComponentFixture<InfinityScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinityScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinityScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
