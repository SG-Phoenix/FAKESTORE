import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserPageProductsComponent } from './user-page-products/user-page-products.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UserPageAddressesComponent } from './user-page-addresses/user-page-addresses.component';
import { UserPageInfoComponent } from './user-page-info/user-page-info.component';
import { UserPageSellingComponent } from './user-page-selling/user-page-selling.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageMainComponent } from './user-page-main/user-page-main.component';
import { UserPageOrdersComponent } from './user-page-orders/user-page-orders.component';
import { UserDetailsComponent } from './user-details/user-details.component';



const routes: Routes = [
    {path: "", component: MainContentComponent},
    {path:"users/:id", component: UserDetailsComponent},
    {path: "products/:id",  component: ProductDetailsComponent},
    {path: "shopping_cart", component: ShoppingCartComponent},
    {path: "search", component: SearchComponent},
    {
      path: "user", component: UserPageComponent,
      children:
      [
        {
          path: "main",
          component: UserPageMainComponent
        },
        {
          path: "orders",
          component: UserPageOrdersComponent,
        },
        {
          path: "",
          redirectTo: "main",
          pathMatch: 'full'
        },
        {
          path: "orders/details/:id",
          component: OrderDetailsComponent
        },
        {
          path: "selling",
          component: UserPageSellingComponent
        },
        {
          path:"details",
          component: UserPageInfoComponent
        },
        {
          path:"addresses",
          component: UserPageAddressesComponent
        },
        {
          path:"addresses/add",
          component: AddAddressComponent
        },
        {
          path:"addresses/:id",
          component: UpdateAddressComponent
        },
        {
          path:"products",
          component: UserPageProductsComponent
        },
        {
          path:"products/add",
          component: AddProductComponent
        },
        {
          path:"products/:id",
          component: UpdateProductComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
