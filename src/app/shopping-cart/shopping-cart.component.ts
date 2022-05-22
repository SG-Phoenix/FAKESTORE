import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ShoppingCartProduct } from '../order.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private orderService:OrderService) { }
  productList:ShoppingCartProduct[] = [];
  ngOnInit(): void {
      this.productList = this.orderService.getProducts();
  }

}
