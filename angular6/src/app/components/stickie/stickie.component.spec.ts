import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickieComponent } from './stickie.component';

describe('StickieComponent', () => {
  let component: StickieComponent;
  let fixture: ComponentFixture<StickieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
