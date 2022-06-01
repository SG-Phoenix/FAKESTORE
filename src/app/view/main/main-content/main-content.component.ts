import { ProductService } from '../../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{


  constructor(
    private breakpointObserver: BreakpointObserver,
    private productService:ProductService
    ) {
      this.newProducts = [];
      this.randomProducts = [];
    }
  ngOnInit(): void {
    this.productService.getNewProducts()
    .subscribe(
      productPage => this.newProducts=productPage.content
    );

    this.productService.getRandomProducts()
    .subscribe(
      productPage => this.randomProducts=productPage.content
    )
  }

  newProducts:Product[];
  randomProducts:Product[];
}
