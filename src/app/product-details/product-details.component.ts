import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product?:Product;
  quantity:number=1;
  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private location: Location,
              private breakpointObserver: BreakpointObserver,
              private orderService:OrderService
              ) { }

  ngOnInit(): void {
   this.getProduct();
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





  getProduct()
  {
    const product_id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(product_id).subscribe(product => this.product=product);
  }

}
