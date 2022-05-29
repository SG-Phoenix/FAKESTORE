import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Product } from '../model/product';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { ShoppingCartProduct } from '../service/order.service';
import { Address } from '../model/address';
import { User } from '../model/user';
import { Order } from '../model/order';
import { OrderLineDto } from '../model/order-line-dto';
import { OrderDto } from '../model/order-dto';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  constructor(private orderService:OrderService,
              private userService:UserService,
              private router:Router
    ) {
    this.totalPrice = 0;
    this.addressList = [];
    this.productList = Array.from(this.orderService.getProducts().values());
    this.user = this.userService.getCurrentUser();
    this.productList.forEach(cartProduct => this.totalPrice+=cartProduct.quantity*cartProduct.product.price)
    this.userService.getUserAddresses(this.user.id).subscribe
    (addresses => this.addressList = addresses);
    this.orderService.change.subscribe(_ =>
      {

        this.productList =  Array.from(this.orderService.getProducts().values());
        var totalPrice=0;
        this.productList.forEach(cartProduct => totalPrice+=cartProduct.quantity*cartProduct.product.price);
        this.totalPrice = totalPrice;
      }
    );
  }

  productList:ShoppingCartProduct[];
  user:User;
  addressList:Address[];
  totalPrice:number;
  selectedAddress?: Address;
  ngOnInit(): void {

  }

  addProduct(product:Product)
  {
      this.orderService.addToCart(product,1);
  }

  removeProduct(product:Product)
  {
     this.orderService.removeFromCart(product,1);
  }

  changeProduct(product:Product, quantity:any)
  {
    console.log(quantity);
    this.orderService.setProductQuantity(product,parseInt(quantity));
  }

  deleteProduct(product:Product)
  {
    this.changeProduct(product, 0);
  }

  selectCard(address:Address)
  {
    this.selectedAddress=address;
  }

  generateOrder()
  {
    let orderLines:OrderLineDto[] = [] as OrderLineDto[];
    let order:OrderDto ={} as OrderDto;
    let totalPrice = 0;
    if(this.selectedAddress)
    {
      order.country = this.selectedAddress.country;
      order.city = this.selectedAddress.city;
      order.postalCode = this.selectedAddress.postalCode;
      order.street = this.selectedAddress.street;
    }
    order.userId = this.user.id;

    for(let cartProduct of this.productList)
    {
        let orderLine:OrderLineDto = {} as OrderLineDto;
        orderLine.productId = cartProduct.product.id;
        orderLine.quantity = cartProduct.quantity;
        orderLine.purchasePrice = cartProduct.product.price;
        orderLines.push(orderLine);
        totalPrice += cartProduct.quantity*cartProduct.product.price;
    }

    order.products = orderLines;

    this.orderService.createOrder(order).subscribe
    ({
      next:createdOrder =>
      {
        this.orderService.clearCart();
        this.router.navigate(["/user"])
      },
      error: err =>
      {
        this.router.navigate(["/"])
      }
    }
    )
  }

}
