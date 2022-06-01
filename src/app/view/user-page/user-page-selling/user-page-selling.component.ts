import { ActivatedRoute, Router } from '@angular/router';
import { Selling } from 'src/app/model/selling';
import { User } from 'src/app/model/user';
import { OrderService } from 'src/app/service/order.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-page-selling',
  templateUrl: './user-page-selling.component.html',
  styleUrls: ['./user-page-selling.component.css']
})
export class UserPageSellingComponent implements OnInit {

  constructor(private userService:UserService,
    private orderService:OrderService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) {
    this.userSelling = [];
   }

  private currentUser?:User;
  page:number = 0;
  pageSize:number = 10;
  length:number = 0;
  userSelling:Selling[];

  ngOnInit(): void {

    this.userService.getCurrentUser()
    .then(
      user =>
      {
        this.currentUser = user;
        this.activatedRoute.queryParamMap.subscribe(
          params => {
            if(params.has("page"))
              this.page = parseInt(params.get("page") || "0");

            if(params.has("pageSize"))
              this.pageSize = parseInt(params.get("pageSize") || "10");

            this.getSelling();
          }
          );
      }
    )

  }


  changeSellingPage(event:PageEvent)
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

  private getSelling()
  {
    var params =
    {
      page: this.page,
      pageSize: this.pageSize
    }
    if(this.currentUser)
    this.orderService.getUserSelling(this.currentUser.id, params).subscribe(
      sellingPage =>
      {
        this.userSelling = sellingPage.content;
        this.length = sellingPage.totalElements;
      }
    )
  }

}
