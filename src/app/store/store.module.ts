import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    ModelModule, BrowserModule, FormsModule, StoreComponent, CounterDirective, CartSummaryComponent,
    CartDetailComponent, CheckoutComponent, RouterModule
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
  declarations: []
})
export class StoreModule { }
