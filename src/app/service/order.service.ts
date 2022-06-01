import { catchError } from 'rxjs/operators';
import { SellingPage } from './../model/selling-page';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';
import { Selling } from '../model/selling';
import { OrderPage } from '../model/order-page';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderDto } from '../model/order-dto';
import { tap } from 'rxjs';

export interface ShoppingCartProduct
{
  product:Product,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {


  private shopping_cart:Map<Number,ShoppingCartProduct>;
  private baseURL = environment.baseURL+"/orders";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200"}
    )
  }

  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient,
              private snackBar:MatSnackBar

    ) {


    if(localStorage['cart'])
      this.shopping_cart = new Map(JSON.parse(localStorage['cart']))
    else
      this.shopping_cart  = new Map<Number, ShoppingCartProduct>();
  }

  ngOnInit(): void {
    //this.shopping_cart = JSON.parse( localStorage.getItem("cart") || "[]" );
    this.change.emit("loaded");
  }

  addToCart(product: Product, quantity:number)
  {
    var old_quantity = this.shopping_cart.get(product.id)?.quantity || 0;
    console.log(old_quantity);
    console.log(old_quantity==0);

    if(old_quantity<1)
    {
     this.openSnackBar("Prodotto " + product.name + " aggiunto", "snackbar-success");
    }
    else
    {
     this.openSnackBar("Aggiornata la quantità del prodotto " + product.name , "snackbar-success");
    }
    this.shopping_cart.set(product.id, {product:product, quantity: old_quantity+quantity});


    this.change.emit("added");
    this.updatePersistedShoppingCart();
  }

  removeFromCart(product:Product, quantity:number)
  {
    var cartProduct = this.shopping_cart.get(product.id);
    if(cartProduct!=undefined)
    {
      if(cartProduct.quantity-quantity<=0)
      {
        this.shopping_cart.delete(product.id);
        this.openSnackBar("Prodotto " + product.name + " rimosso ", "snackbar-success");
      }

      else
        {
          cartProduct.quantity=cartProduct.quantity-quantity;
          this.shopping_cart.set(product.id, cartProduct);
          this.openSnackBar("Aggiornata la quantità del prodotto " + product.name , "snackbar-success");
        }


      this.change.emit("removed");
      this.updatePersistedShoppingCart();
    }
  }

  setProductQuantity(product:Product, quantity:number)
  {
    var cartProduct = this.shopping_cart.get(product.id);
    if(cartProduct!=undefined)
    {
      if(quantity==0)
      {
        this.shopping_cart.delete(product.id);
        this.openSnackBar("Prodotto " + product.name + " rimosso ", "snackbar-success");
      }
      else
      {
        cartProduct.quantity=quantity;
        this.shopping_cart.set(product.id,cartProduct);
        this.openSnackBar("Aggiornata la quantità del prodotto " + product.name , "snackbar-success");
      }


      this.change.emit("changed");
      this.updatePersistedShoppingCart();
    }
  }

  updatePersistedShoppingCart()
  {
    localStorage["cart"] = JSON.stringify(Array.from(this.shopping_cart.entries()));
  }

  clearCart()
  {
    this.shopping_cart = new Map<Number,ShoppingCartProduct>();
    this.change.emit("cleared cart");
    localStorage.removeItem("cart");
  }

  getProductsCount():number
  {
      return this.shopping_cart.size;
  }

  getProducts():Map<Number,ShoppingCartProduct>
  {
   return this.shopping_cart;
  }


  getUserOrders(userId:number, params:any):Observable<OrderPage>
  {
      return this.http.get<OrderPage>(`${this.baseURL}/user/${userId}/paged`, {params: params});
  }

  getOrderById(orderId:number):Observable<Order>
  {
    return this.http.get<Order>(`${this.baseURL}/${orderId}`);
  }

  getUserSelling(userId:number, params:any):Observable<SellingPage>
  {
    return this.http.get<SellingPage>(`${this.baseURL}/purchases/by-user/${userId}/paged`, {params:params});
  }


  openSnackBar(message:string, cssClass:string)
  {
    this.snackBar.open(message,undefined,
      {
        duration: 5000,
        panelClass: cssClass
      });
  }

  createOrder(newOrder:OrderDto):Observable<Order>
  {
    return this.http.post<Order>(`${this.baseURL}`,newOrder)
    .pipe(
      tap(
        order =>
        {
          this.openSnackBar("Ordine creato!", "snackbar-success");
          this.clearCart();
          return order;
        }
      ),
      catchError(err =>
        {
          this.openSnackBar("Ordine fallito!", "snackbar-error");
          throw err
        })
    );
  }

}
