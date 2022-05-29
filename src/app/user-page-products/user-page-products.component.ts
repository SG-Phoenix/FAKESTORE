import { ProductService } from './../service/product.service';
import { UserService } from './../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../model/product';

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

    this.productService.getUserProducts(this.userService.getCurrentUser().id,options)
    .subscribe(
      productPage =>
      {
        this.products = productPage.content;
        this.length = productPage.totalElements;
      });

  }

}
