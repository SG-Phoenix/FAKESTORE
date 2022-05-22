import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import { Category } from '../category';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {




  productsCount:number = 0;
  productCategories?:Category[];
  storeName = environment.storeName;
  searchString:string = '';
  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
              private breakpointObserver: BreakpointObserver,
              private orderService:OrderService,
              private productService:ProductService,
              private router:Router,
              private activatedRoute:ActivatedRoute
    ) {}

    ngOnInit(): void {
      this.productsCount = this.orderService.getProductsCount();
      this.orderService.change.subscribe(() => {
        this.productsCount=this.orderService.getProductsCount()
        console.log(this.orderService.getProducts());
      });

      this.productService.getCategories().subscribe(categories => {this.productCategories=categories});
    }

    search(name:string)
    {
      if(this.searchString)
        this.router.navigate(
          ['/search'],
          {
            relativeTo: this.activatedRoute,
            queryParams: {name: this.searchString}
          });
    }

}
