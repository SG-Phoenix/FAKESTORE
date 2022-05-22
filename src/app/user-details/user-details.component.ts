import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user?:User;
  @Input() userProducts?:Product[];

  constructor(private userService:UserService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private productService: ProductService
              ) { }

  ngOnInit(): void {
    this.getUser();
    this.getUserProducts();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  updateUser():void
  {
    if (this.user) {
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

  getUserProducts()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getUserProducts(id)
      .subscribe(products => this.userProducts = products);
  }

  goBack(): void {
    this.router.navigateByUrl('/users');
  }


}
