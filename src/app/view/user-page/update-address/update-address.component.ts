import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Address } from '../../../model/address';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute
    ) {
      this.userService.getUserAddress(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(
        address =>
        {

          this.addressForm.get("id")?.setValue(address.id);
          this.addressForm.get("userId")?.setValue(address.userId);
          this.addressForm.get("title")?.setValue(address.title);
          this.addressForm.get("country")?.setValue(address.country);
          this.addressForm.get("street")?.setValue(address.street);
          this.addressForm.get("city")?.setValue(address.city);
          this.addressForm.get("postalCode")?.setValue(address.postalCode);
        }
      )
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

  address?:Address;

  updateAddress(address:Address)
  {
    this.userService.updateUserAddress(address)
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
