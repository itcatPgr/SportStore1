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

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule, StoreModule, HttpClientModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent },
      { path: "cart", component: CartDetailComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
