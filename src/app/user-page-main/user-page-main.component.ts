import { AuthService } from 'src/auth/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { MENU_ITEMS } from '../user-page-menu/user-page-menu';
import { UserPageMenuItem } from '../user-page-menu/user-page-menu-item';

@Component({
  selector: 'app-user-page-main',
  templateUrl: './user-page-main.component.html',
  styleUrls: ['./user-page-main.component.css']
})
export class UserPageMainComponent implements OnInit {

  menuItems: UserPageMenuItem[];
  constructor(
    private userService:UserService,
    private authService:AuthService
    )
  {
    this.currentUser = this.userService.getCurrentUser();
    this.menuItems = MENU_ITEMS.filter(item => item.text != "Bacheca");
  }

  currentUser:User;

  ngOnInit(): void {
  }

  logout()
  {
    this.authService.logout();
  }
}
