import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../model/user';
import { Address } from '../model/address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
    ) {
      this.user=userService.getCurrentUser();
      this.addressForm.get("userId")?.setValue(this.user.id);
     }

  ngOnInit(): void {
  }

  addressForm = new FormGroup({
    id:new FormControl(''),
    userId: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    postalCode: new FormControl(''),
    title: new FormControl('')
  });

  user:User;

  addAddress(address:Address)
  {
    this.userService.createAddress(address)
    .subscribe(
      {
        next: address =>
        {
            this.router.navigate(["/user/addresses"]);
        },
        error: error =>
        {

        }
      }
    )
  }

}
