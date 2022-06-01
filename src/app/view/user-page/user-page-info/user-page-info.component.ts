import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-page-info',
  templateUrl: './user-page-info.component.html',
  styleUrls: ['./user-page-info.component.css']
})
export class UserPageInfoComponent implements OnInit {

  constructor(private userService:UserService,
              private snackBar: MatSnackBar
    )
  {
    this.editable = false;
  }

  private user?:User;
  editable:boolean;

  ngOnInit(): void {
    this.userService.getCurrentUser()
    .then
    (
      user =>
      {
        this.user = user;
        if(this.user)
        {
          this.userForm.get("id")?.setValue(this.user.id);
          this.userForm.get("first_name")?.setValue(this.user.first_name);
          this.userForm.get("last_name")?.setValue(this.user.last_name);
          this.userForm.get("e_mail")?.setValue(this.user.e_mail);
          this.userForm.get("username")?.setValue(this.user.username);
        }

      }
    )

  }

  userForm = new FormGroup({
    id:new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    e_mail: new FormControl(''),
    username: new FormControl('')
  });

  updateUser(updatedUser:User)
  {
    console.log(updatedUser);

    this.userService.updateUser(updatedUser)
    .subscribe(
      {
        next: newUser =>
        {
          this.user=newUser;
          this.editable=false;
        }
      }
      );
  }



}
