import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './site-framwork/header/header.component';
import { FooterComponent } from './site-framwork/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IonicModule } from '@ionic/angular';


import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,

    EmployeeDashboardComponent,

    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    PortfolioComponent,

    ProductsComponent,
    ThanhToanComponent,
    SearchComponent,
    ProductDetailComponent







  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
