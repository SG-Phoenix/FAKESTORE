import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateProductComponent } from './view/user-page/update-product/update-product.component';
import { AddProductComponent } from './view/user-page/add-product/add-product.component';
import { UserPageProductsComponent } from './view/user-page/user-page-products/user-page-products.component';
import { UpdateAddressComponent } from './view/user-page/update-address/update-address.component';
import { AddAddressComponent } from './view/user-page/add-address/add-address.component';
import { UserPageAddressesComponent } from './view/user-page/user-page-addresses/user-page-addresses.component';
import { UserPageInfoComponent } from './view/user-page/user-page-info/user-page-info.component';
import { UserPageSellingComponent } from './view/user-page/user-page-selling/user-page-selling.component';
import { OrderDetailsComponent } from './view/user-page/order-details/order-details.component';
import { ShoppingCartComponent } from './view/shopping-cart/shopping-cart/shopping-cart.component';
import { MainContentComponent } from './view/main/main-content/main-content.component';
import { ProductDetailsComponent } from './view/main/product-details/product-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './view/main/search/search.component';
import { UserPageComponent } from './view/user-page/user-page/user-page.component';
import { UserPageMainComponent } from './view/user-page/user-page-main/user-page-main.component';
import { UserPageOrdersComponent } from './view/user-page/user-page-orders/user-page-orders.component';



const routes: Routes = [
    {path: "", component: MainContentComponent},
    {path: "products/:id",  component: ProductDetailsComponent},
    {path: "shopping_cart", component: ShoppingCartComponent},
    {path: "search", component: SearchComponent},
    {
      path: "user", component: UserPageComponent,
      canActivate:[AuthGuard],

      data: { roles:['user']},
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
