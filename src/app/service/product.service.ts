import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../model/category';
import { ProductPage } from '../model/product-page';
import { AnyForUntypedForms } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = environment.baseURL+"/products";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient,
              private snackBar:MatSnackBar
    )
  {}


  getProducts(): Observable<Product[]>
    {
  return this.http.get<Product[]>(this.baseURL);
  }

  getProductsPaged(pageSize:number=10,page:number=0,sortBy:string='id'): Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.baseURL}/paged?pageSize=${pageSize}&page=${page}&sortBy=${sortBy}`);
  }

  getUserProducts(user_id:number, options:any): Observable<ProductPage>{
    return this.http.get<ProductPage>(`${this.baseURL}/user/${user_id}/paged`, {params:options});
  }

  getProduct(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(product:Product):Observable<Product>
  {
    return this.http.put<Product>(this.baseURL,product, this.httpOptions);
  }


  getCategories(): Observable<Category[]>
  {
    return this.http.get<Category[]>(`${this.baseURL}/categories`);
  }

  getFilteredProducts(queryParams:any): Observable<ProductPage>
  {

    return this.http.get<ProductPage>(`${this.baseURL}/advancedSearch/paged`, {params: queryParams});
  }


  createProduct(product:Product):Observable<Product>
  {
    return this.http.post<Product>(`${this.baseURL}`,product,this.httpOptions)
    .pipe(
      tap(
        order =>
        {
          this.openSnackBar("Prodotto creato!", "snackbar-success");
          return order;
        }
      ),
      catchError(err =>
        {
          this.openSnackBar("Creazione del prodotto fallita!", "snackbar-error");
          throw err;
        })
    );
  }

  openSnackBar(message:string, cssClass:string)
  {
    this.snackBar.open(message,undefined,
      {
        duration: 5000,
        panelClass: cssClass
      });
  }

}
