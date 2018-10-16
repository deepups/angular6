import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySenderComponent } from './category-sender.component';

describe('CategorySenderComponent', () => {
  let component: CategorySenderComponent;
  let fixture: ComponentFixture<CategorySenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
