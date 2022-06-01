import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProductCardComponent } from './shopping-cart-product-card.component';

describe('ShoppingCartProductCardComponent', () => {
  let component: ShoppingCartProductCardComponent;
  let fixture: ComponentFixture<ShoppingCartProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
