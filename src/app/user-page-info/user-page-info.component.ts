import { User } from './../model/user';
import { UserService } from './../service/user.service';
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
    this.user = this.userService.getCurrentUser();

    this.userForm.get("id")?.setValue(this.user.id);
    this.userForm.get("first_name")?.setValue(this.user.first_name);
    this.userForm.get("last_name")?.setValue(this.user.last_name);
    this.userForm.get("e_mail")?.setValue(this.user.e_mail);
    this.userForm.get("username")?.setValue(this.user.username);
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
          this.userService.setCurrentUser(newUser);
          this.user=newUser;
          this.editable=false;
          this.openSnackBar("Utente aggiornato!", "snackbar-success");
        },
        error: err =>
        {
          if(this.user)
          {
            console.log(err);
            this.openSnackBar("Email già usata!", "snackbar-error");
          }

        }
      }
      );
  }

  openSnackBar(message:string, cssClass:string)
  {
    this.snackBar.open(message,undefined,
      {
        panelClass: cssClass
      });
  }


}
