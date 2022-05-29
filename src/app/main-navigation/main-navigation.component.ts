import { AuthService } from 'src/auth/service/auth.service';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { Category } from '../model/category';
import { User } from '../model/user';
import { UserPageMenuItem } from '../user-page-menu/user-page-menu-item';
import { MENU_ITEMS } from '../user-page-menu/user-page-menu';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {



  menuItems:UserPageMenuItem[] = MENU_ITEMS;
  productsCount:number = 0;
  productCategories?:Category[];
  storeName = environment.storeName;
  searchString:string = '';
  user: User;
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
              private activatedRoute:ActivatedRoute,
              private userService:UserService,
              private authService:AuthService
    ) {
      this.user = this.userService.getCurrentUser();
    }

    ngOnInit(): void {
      this.productsCount = this.orderService.getProductsCount();
      this.orderService.change.subscribe(() => {
        this.productsCount=this.orderService.getProductsCount()
        console.log(this.orderService.getProducts());
      });

      this.activatedRoute.queryParamMap.subscribe(
        params =>
         this.searchString= params.get("name")|| ""
      );

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

    searchByCategory(name:string)
    {

        this.router.navigate(
          ['/search'],
          {
            relativeTo: this.activatedRoute,
            queryParams: {category: name}
          });
    }

  logout()
  {
    this.authService.logout();
  }

}
