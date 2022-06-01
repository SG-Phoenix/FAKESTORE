import { OrderService } from '../../../service/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../model/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private orderService:OrderService) {
  }

  order?:Order;
  ngOnInit(): void {
    this.orderService.getOrderById(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(order => this.order = order);

  }

}
