import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';
import { CounterDirective } from "./counter.directive";
import { Cart } from "../model/cart.model";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, CounterDirective, CartSummaryComponent],
  //moduleId: module.id,
  templateUrl: './store.component.html',
  //styleUrl: './store.component.scss'
})
export class StoreComponent {
  public selectedCategory = '';
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router) {
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory as string;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository
  //     .getProducts(this.selectedCategory).length / this.productsPerPage))
  //     .fill(0).map((x, i) => i + 1);
  // }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}

