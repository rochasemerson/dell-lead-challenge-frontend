import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from "@angular/common/http";
import { SigninComponent } from './components/signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './pages/user/user.component';
import { ContentComponent } from './content/content.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductService } from './services/product/product.service';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    UserComponent,
    ContentComponent,
    ProductCardComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
