import { Component } from '@angular/core';
import {Cart} from "../../model/cart.model";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cart-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './cart-detail.component.html',
  //template: `<div><h3 class="bg-info p-a-1">Cart Detail Component</h3></div>`,
  styleUrl: './cart-detail.component.scss'
})
export class CartDetailComponent {
  constructor(public cart: Cart) { }
}
