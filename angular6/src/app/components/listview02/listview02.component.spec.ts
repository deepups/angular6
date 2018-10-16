import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listview02Component } from './listview02.component';

describe('Listview02Component', () => {
  let component: Listview02Component;
  let fixture: ComponentFixture<Listview02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listview02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listview02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
