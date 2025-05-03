import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { HttpClientModule } from "@angular/common/http";
import {StoreFirstGuard} from "./storeFirst.guard";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule, StoreModule, HttpClientModule,
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
