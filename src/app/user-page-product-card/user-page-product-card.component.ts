import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-user-page-product-card',
  templateUrl: './user-page-product-card.component.html',
  styleUrls: ['./user-page-product-card.component.css']
})
export class UserPageProductCardComponent implements OnInit {

  @Input() product?:Product;

  constructor(private orderService:OrderService) {
   }

  ngOnInit(): void {

  }


}
