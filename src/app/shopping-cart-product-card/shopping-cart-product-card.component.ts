import { Component, OnInit } from '@angular/core';
import { ShoppingCartProduct, OrderService } from '../service/order.service';
import { Input } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-shopping-cart-product-card',
  templateUrl: './shopping-cart-product-card.component.html',
  styleUrls: ['./shopping-cart-product-card.component.css']
})
export class ShoppingCartProductCardComponent implements OnInit {

  @Input() cartProduct?:ShoppingCartProduct;

  constructor(private orderService:OrderService,
    )
   { }

  ngOnInit(): void {
  }

  addProduct(product:Product)
  {
      this.orderService.addToCart(product,1);
  }

  removeProduct(product:Product)
  {
     this.orderService.removeFromCart(product,1);
  }

  changeProduct(product:Product, quantity:any)
  {
    console.log(quantity);
    this.orderService.setProductQuantity(product,parseInt(quantity));
  }

  deleteProduct(product:Product)
  {
    this.changeProduct(product, 0);
  }

}
