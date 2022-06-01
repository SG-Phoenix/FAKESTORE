import { FormsModule } from '@angular/forms';
import { MainNavigationComponent } from './view/main/main-navigation/main-navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainContentComponent } from './view/main/main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { ShoppingCartComponent } from './view/shopping-cart/shopping-cart/shopping-cart.component';
import { SearchComponent } from './view/main/search/search.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { UserPageComponent } from './view/user-page/user-page/user-page.component';
import { UserPageMainComponent } from './view/user-page/user-page-main/user-page-main.component';
import { UserPageOrdersComponent } from './view/user-page/user-page-orders/user-page-orders.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TestProductCardComponent } from './view/test-product-card/test-product-card.component';
import { ShoppingCartProductCardComponent } from './view/shopping-cart/shopping-cart-product-card/shopping-cart-product-card.component';
import { OrderDetailsComponent } from './view/user-page/order-details/order-details.component';
import '@angular/common/locales/global/it';
import { UserPageSellingComponent } from './view/user-page/user-page-selling/user-page-selling.component';
import { UserPageInfoComponent } from './view/user-page/user-page-info/user-page-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserPageAddressesComponent } from './view/user-page/user-page-addresses/user-page-addresses.component';
import { AddAddressComponent } from './view/user-page/add-address/add-address.component';
import { UpdateAddressComponent } from './view/user-page/update-address/update-address.component';
import { UserPageProductsComponent } from './view/user-page/user-page-products/user-page-products.component';
import { AddProductComponent } from './view/user-page/add-product/add-product.component';
import { MatSelectModule } from '@angular/material/select';
import { UpdateProductComponent } from './view/user-page/update-product/update-product.component';
import { UserPageProductCardComponent } from './view/user-page/user-page-product-card/user-page-product-card.component';
import { AuthModule } from 'src/auth/auth.module';
import { MainContentProductCardComponent } from './view/main/main-content-product-card/main-content-product-card.component';
import { ProductDetailsComponent } from './view/main/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    MainNavigationComponent,
    MainContentComponent,
    ShoppingCartComponent,
    SearchComponent,
    UserPageComponent,
    UserPageMainComponent,
    UserPageOrdersComponent,
    TestProductCardComponent,
    ShoppingCartProductCardComponent,
    OrderDetailsComponent,
    UserPageSellingComponent,
    UserPageInfoComponent,
    UserPageAddressesComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    UserPageProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    UserPageProductCardComponent,
    MainContentProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatBadgeModule,
    MatTabsModule,
    CommonModule,
    MatCheckboxModule,
    MatStepperModule,
    MatExpansionModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    AuthModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
