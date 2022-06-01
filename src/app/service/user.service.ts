import { AuthService } from 'src/auth/service/auth.service';
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

  private user?:User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:4200"}
    )
  }

  constructor(private http:HttpClient,
              private snackBar:MatSnackBar,
              private authService:AuthService
    )
  {
    this.authService.isLoggedIn().then(
      status =>
    {
      if(status)
      {
          this.authService.loadUserProfile()
          .then(
            profile =>
            {
              this.getUserByUsername(profile.username || "")
              .subscribe(
                {
                  next: user =>
                  {
                    console.log(user);
                    this.setCurrentUser(user);
                  },
                  error: err =>
                  {
                    let user = {} as User;
                    user.username = profile.username || "";
                    user.e_mail = profile.email || "";
                    user.first_name = profile.firstName;
                    user.last_name = profile.lastName;
                    this.createUser(user).subscribe(
                      user =>
                      {
                        console.log(user);
                        this.setCurrentUser(user);
                      }
                    )
                  }
                }
              );
            }
          )
      }
    });
  }

  async getCurrentUser():Promise<User | undefined>
  {
    return new Promise((resolve, reject) =>
    {

      this.authService.loadUserProfile()
      .then(
          userProfile =>
          {
            this.getUserByUsername(userProfile.username ||"")
            .subscribe(
              {
                next:foundUser =>
                {
                  resolve(foundUser);
                },
                error: err =>
                {
                  resolve(undefined);
                }
              }
            );
          }
      )
      .catch(
        err =>
        {
          resolve(undefined);
        }
      );

    });

  }

  setCurrentUser(user:User):void
  {
    this.user = user;
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  getUser(id:number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/by-id/${id}`);
  }

  getUserByUsername(username:string): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/by-username/${username}`);
  }


  createUser(user:User): Observable<User> {
    return this.http.post<User>(this.baseURL, user, this.httpOptions);
  }

  updateUser(user:User): Observable<User> {
    return this.http.put<User>(this.baseURL, user, this.httpOptions)
    .pipe(
      tap(
        address =>
        {
          this.openSnackBar("Utente aggiornato!", "snackbar-success");
          return address;
        }
      ),
      catchError(err =>
        {
          this.openSnackBar("Email già usata!", "snackbar-error");
          throw err
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
