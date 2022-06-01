import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Input } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-test-product-card',
  templateUrl: './test-product-card.component.html',
  styleUrls: ['./test-product-card.component.css']
})
export class TestProductCardComponent implements OnInit {

  @Input() product?:Product;
  @Input() quantity:number;
  @Input() displayCartButtons:boolean;

  constructor(private orderService:OrderService) {
    this.displayCartButtons=true;
    this.quantity = 1;
   }

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
