import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainContentComponent } from './main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SearchComponent } from './search/search.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageMainComponent } from './user-page-main/user-page-main.component';
import { UserPageOrdersComponent } from './user-page-orders/user-page-orders.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TestProductCardComponent } from './test-product-card/test-product-card.component';
import { ShoppingCartProductCardComponent } from './shopping-cart-product-card/shopping-cart-product-card.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import '@angular/common/locales/global/it';
import { UserPageSellingComponent } from './user-page-selling/user-page-selling.component';
import { UserPageInfoComponent } from './user-page-info/user-page-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserPageAddressesComponent } from './user-page-addresses/user-page-addresses.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { UserPageProductsComponent } from './user-page-products/user-page-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatSelectModule } from '@angular/material/select';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserPageProductCardComponent } from './user-page-product-card/user-page-product-card.component';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ProductDetailsComponent,
    MainPageComponent,
    FooterComponent,
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
    UserPageProductCardComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
