import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsComponent } from './products/products.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    {path: "users", component: UsersListComponent},
    {path: "", component: MainContentComponent},
    {path:"users/:id", component: UserDetailsComponent},
    {path: "products/:id",  component: ProductDetailsComponent},
    {path: "products", component: ProductsComponent},
    {path: "shopping_cart", component: ShoppingCartComponent},
    {path: "search", component: SearchComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
