import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = environment.baseURL+"/users";

  private user:User = {
    id:1,
    first_name:"Yevhenii",
    last_name:"Sliusar",
    username:"ShadowGek",
    e_mail:"uawow2012@gmail.com"
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200"}
    )
  }

  constructor(private http:HttpClient,
              private snackBar:MatSnackBar
    )
  {}



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  getUser(id:number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/by-id/${id}`);
  }



  updateUser(user:User): Observable<User> {
    return this.http.put<User>(this.baseURL, user, this.httpOptions);
  }

  getCurrentUser():User
  {
      return this.user;
  }

  setCurrentUser(user:User):void
  {
    this.user = user;
  }

  openSnackBar(message:string, cssClass:string)
  {
    this.snackBar.open(message,undefined,
      {
        duration: 5000,
        panelClass: cssClass
      });
  }


  getUserAddresses(userId:number):Observable<Address[]>
  {
    return this.http.get<Address[]>(`${this.baseURL}/${userId}/addresses`);
  }

  getUserAddress(addressId:number):Observable<Address>
  {
    return this.http.get<Address>(`${this.baseURL}/addresses/${addressId}/`);
  }

  deleteAddress(addressId:number):Observable<any>
  {
    return this.http.delete<any>(`${this.baseURL}/addresses/${addressId}`)
  }
  updateUserAddress(address:Address):Observable<Address>
  {
    return this.http.put<Address>(`${this.baseURL}/addresses`, address)
    .pipe(
      tap(
        address =>
        {
          this.openSnackBar("Indirizzo aggiornato!", "snackbar-success");
          return address;
        }
      ),
      catchError(err =>
        {
          this.openSnackBar("Errore durante aggiornamento!", "snackbar-error");
          throw err
        })
    );
  }

  createAddress(address: Address):Observable<Address>
  {
    return this.http.post<Address>(`${this.baseURL}/addresses`, address)
    .pipe(
      tap(
        address =>
        {
          this.openSnackBar("Indirizzo creato!", "snackbar-success");
          return address;
        }
      ),
      catchError(err =>
        {
          this.openSnackBar("Creazione indirizzo fallita!", "snackbar-error");
          throw err
        })
    );
  }




}
