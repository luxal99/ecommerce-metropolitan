import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBindingComponent } from './product-binding.component';

describe('ProductBindingComponent', () => {
  let component: ProductBindingComponent;
  let fixture: ComponentFixture<ProductBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
