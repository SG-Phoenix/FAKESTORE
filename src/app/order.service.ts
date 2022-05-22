import { Injectable, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from './product';


export interface ShoppingCartProduct
{
  product:Product,
  quantity: number
}
@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {


  private shopping_cart:ShoppingCartProduct[] =[];

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //this.shopping_cart = JSON.parse( localStorage.getItem("cart") || "[]" );
    this.change.emit("loaded");
  }

  addToCart(product: Product, quantity:number)
  {
   /* if(this.shopping_cart.has(product_id))
    {
      var value = this.shopping_cart.get(product_id) || 0;
      this.shopping_cart.set(product_id, value + product_quantity);
    }else
    {
      this.shopping_cart.set(product_id, product_quantity);
    }
    */

    this.shopping_cart.push({product:product, quantity:quantity});

    this.change.emit("added");
    //localStorage.setItem("cart", JSON.stringify(this.shopping_cart));

  }

  getProductsCount():number
  {
      return this.shopping_cart.length;
  }

  getProducts():ShoppingCartProduct[]
  {
   return this.shopping_cart;
  }
}
