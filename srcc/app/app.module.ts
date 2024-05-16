import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { WomenPageComponent } from './women-page/women-page.component';
import { MenPageComponent } from './men-page/men-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { AccessoriesPageComponent } from './accessories-page/accessories-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    WomenPageComponent,
    MenPageComponent,
    KidsPageComponent,
    AccessoriesPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
