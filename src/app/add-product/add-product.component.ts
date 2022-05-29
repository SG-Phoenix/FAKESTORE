import { Category } from './../model/category';
import { ProductService } from './../service/product.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router,
    private productService:ProductService
    ) {
        this.productForm.get("user")?.setValue(userService.getCurrentUser().username);
        this.categories = [];
        this.productService.getCategories()
        .subscribe(
          categories => this.categories = categories
        )
     }

  ngOnInit(): void {
  }

  categories:Category[];

  productForm = new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
    barcode: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    user: new FormControl(''),
    brand: new FormControl(''),
    category:new FormControl('')
  });

  addProduct(product:Product)
  {
    this.productService.createProduct(product)
    .subscribe(
      {
        next: product =>
        {
            this.router.navigate(["/user/products"]);
        },
        error: error =>
        {

        }
      }
    )
  }

}
