import { OrderService } from 'src/app/service/order.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-main-content-product-card',
  templateUrl: './main-content-product-card.component.html',
  styleUrls: ['./main-content-product-card.component.css']
})
export class MainContentProductCardComponent implements OnInit {

  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit(): void {
  }

  @Input() product?:Product;
  @Input() quantity:number = 1;
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
