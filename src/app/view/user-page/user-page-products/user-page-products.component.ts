import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-page-products',
  templateUrl: './user-page-products.component.html',
  styleUrls: ['./user-page-products.component.css']
})
export class UserPageProductsComponent implements OnInit {

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private productService:ProductService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe(
      params => {
        if(params.has("page"))
          this.page = parseInt(params.get("page") || "0");

        if(params.has("pageSize"))
          this.pageSize = parseInt(params.get("pageSize") || "10");

        this.getProducts();
      }
      );

  }
  page:number = 0;
  pageSize:number = 10;
  length:number = 0;
  products:Product[] = [];

  changePage(event:PageEvent)
  {
    this.page=event.pageIndex;
    this.pageSize=event.pageSize;
    this.changeResults();
  }

  private changeResults() {
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

  getProducts()
  {
    var options =
    {
      page:this.page,
      pageSize:this.pageSize
    }
    this.userService.getCurrentUser()
    .then(
      user =>
      {
        if(user)
        this.productService.getUserProducts(user.id,options)
        .subscribe(
          productPage =>
          {
            this.products = productPage.content;
            this.length = productPage.totalElements;
          });
      }
    )


  }

}
