import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})

export class UpdateProductComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router,
    private productService:ProductService,
    private route:ActivatedRoute
    ) {
        this.categories = [];
        this.productService.getCategories()
        .subscribe(
          categories => this.categories = categories
        )

        this.productService.getProduct(Number(this.route.snapshot.paramMap.get('id')))
        .subscribe(
          product =>
          {
            this.productForm.get("id")?.setValue(product.id);
            this.productForm.get("user")?.setValue(product.user);
            this.productForm.get("barcode")?.setValue(product.barcode);
            this.productForm.get("description")?.setValue(product.description);
            this.productForm.get("price")?.setValue(product.price);
            this.productForm.get("quantity")?.setValue(product.quantity);
            this.productForm.get("brand")?.setValue(product.brand);
            this.productForm.get("category")?.setValue(product.category);
            this.productForm.get("name")?.setValue(product.name);
          }
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

  updateProduct(product:Product)
  {
    this.productService.updateProduct(product)
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
