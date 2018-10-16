import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KfcNonvegComponent } from './kfc-nonveg.component';

describe('KfcNonvegComponent', () => {
  let component: KfcNonvegComponent;
  let fixture: ComponentFixture<KfcNonvegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KfcNonvegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KfcNonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
