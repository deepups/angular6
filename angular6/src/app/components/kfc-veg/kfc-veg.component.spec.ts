import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfcVegComponent } from './kfc-veg.component';

describe('KfcVegComponent', () => {
  let component: KfcVegComponent;
  let fixture: ComponentFixture<KfcVegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfcVegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfcVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
