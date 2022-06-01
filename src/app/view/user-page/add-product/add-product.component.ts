import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

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
        this.userService.getCurrentUser()
        .then(
          user =>
          {
            this.productForm.get("user")?.setValue(user?.username);
          }
        )
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
        next: () =>
        {

            this.router.navigate(["/user/products"]);
        }
      }
    )
  }

}
