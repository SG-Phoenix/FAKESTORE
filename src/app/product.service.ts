import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './product';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = environment.baseURL+"/products";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient, private messageService:MessageService)
  {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

     private handleError<T>(operation = 'operation', result?: T)
     {
     return (error: any): Observable<T> => {

       // TODO: send the error to remote logging infrastructure
       console.error(error); // log to console instead

       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed: ${error.message}`);

       // Let the app keep running by returning an empty result.
       return of(result as T);
     };
     }


    getProducts(): Observable<Product[]>
     {
    return this.http.get<Product[]>(this.baseURL)
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
    }

    getProductsPaged(pageSize:number=10,page:number=0,sortBy:string='id'): Observable<Product[]>
    {
      return this.http.get<Product[]>(`${this.baseURL}/paged?pageSize=${pageSize}&page=${page}&sortBy=${sortBy}`)
      .pipe(
        tap(_ => this.log(`fetched products`)),
        catchError(this.handleError<Product[]>('getUserProducts'))
      );
    }

    getUserProducts(user_id:number): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.baseURL}/user/${user_id}`)
      .pipe(
        tap(_ => this.log(`fetched user with id ${user_id} products`)),
        catchError(this.handleError<Product[]>('getUserProducts'))
      );
    }

    getProduct(id:number):Observable<Product>
    {
      return this.http.get<Product>(`${this.baseURL}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched product with id ${id}`)),
        catchError(this.handleError<Product>('getUserProducts'))
      );
    }

    updateProduct(product:Product):Observable<Product>
    {
      return this.http.put<Product>(this.baseURL,product, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated product with id ${product.id}`)),
        catchError(this.handleError<Product>(`updateUser id=${product.id}`))
      );
    }


    getCategories(): Observable<Category[]>
    {
      return this.http.get<Category[]>(`${this.baseURL}/categories`)
      .pipe(
        tap(_ => this.log(`fetched categories`)),
        catchError(this.handleError<Category[]>('getUserProducts'))
      );
    }

    getFilteredProducts(queryParams:any): Observable<Product[]>
    {

      return this.http.get<Product[]>(`${this.baseURL}/advancedSearch`, {params: queryParams})
      .pipe(
        tap(_ => this.log(`fetched categories`)),
        catchError(this.handleError<Product[]>('getUserProducts'))
      );
    }

  }
