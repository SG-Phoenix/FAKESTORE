import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  quantity:number = 1;
  @Input() product?:Product;

  ngOnInit(): void {
  }

  add()
  {
    this.quantity++;
  }

  remove()
  {
    if(this.quantity>1)
      this.quantity--;
  }

  addToCart()
  {
    if(this.product)
      this.orderService.addToCart(this.product, this.quantity);
  }

}
