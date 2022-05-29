import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../user-page-menu/user-page-menu';
import { UserPageMenuItem } from '../user-page-menu/user-page-menu-item';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  menuItems:UserPageMenuItem[] = MENU_ITEMS;
  constructor()
  {}



  ngOnInit(): void {
  }

}
