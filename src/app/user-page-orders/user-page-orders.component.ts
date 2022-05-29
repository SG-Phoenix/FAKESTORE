import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from './../service/user.service';
import { OrderService } from './../service/order.service';
import { Order } from './../model/order';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { OrderPage } from '../model/order-page';

@Component({
  selector: 'app-user-page-orders',
  templateUrl: './user-page-orders.component.html',
  styleUrls: ['./user-page-orders.component.css']
})
export class UserPageOrdersComponent implements OnInit {

  constructor(private orderService:OrderService,
    private userService:UserService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {
    this.currentUser = this.userService.getCurrentUser();
    this.orderList = [];
  }

  orderList:Order[];
  page:number = 0;
  pageSize:number = 10;
  length:number = 0;
  private currentUser:User;

  ngOnInit(): void {
    console.log(this.currentUser);


    this.activatedRoute.queryParamMap.subscribe(
      params => {
        if(params.has("page"))
          this.page = parseInt(params.get("page") || "0");

        if(params.has("pageSize"))
          this.pageSize = parseInt(params.get("pageSize") || "10");

        this.getOrders();
      }
      );


  }

  changeOrderPage(event:PageEvent)
  {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.changePageResults();

  }

  private changePageResults() {
    var options =
    {
      page: this.page,
      pageSize: this.pageSize
    }
    this.router.navigate([],
      {
        queryParams: options,
        queryParamsHandling: "merge"
      }
    );
  }

  private getOrders()
  {
    var params =
    {
      page: this.page,
      pageSize: this.pageSize
    }
    this.orderService.getUserOrders(this.currentUser.id, params).subscribe(
      ordersPage =>
      {
        this.orderList = ordersPage.content;
        this.length = ordersPage.totalElements;
      }
    )
  }

}
