import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReceiverComponent } from './product-receiver.component';

describe('ProductReceiverComponent', () => {
  let component: ProductReceiverComponent;
  let fixture: ComponentFixture<ProductReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
