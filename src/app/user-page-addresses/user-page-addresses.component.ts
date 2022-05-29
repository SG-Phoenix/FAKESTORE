import { Router } from '@angular/router';
import { Address } from './../model/address';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-page-addresses',
  templateUrl: './user-page-addresses.component.html',
  styleUrls: ['./user-page-addresses.component.css']
})
export class UserPageAddressesComponent implements OnInit {

  constructor(private userService:UserService,
              private router:Router
    )
  {
    this.addressList = [];
    this.user = this.userService.getCurrentUser();
    this.userService.getUserAddresses(this.user.id)
    .subscribe(
      addresses =>
      {
        this.addressList=addresses
      });
  }

  ngOnInit(): void {
  }

  user:User;
  addressList:Address[];

  deleteAddress(address:Address)
  {
    this.userService.deleteAddress(address.id)
    .subscribe(
      _ =>
      {
          this.addressList = this.addressList.filter(add => add !==address)
      }
    )

  }
}
