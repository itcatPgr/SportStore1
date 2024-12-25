import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class ProductRepository {

private products: Product[] = [];
private categories: string[] = [];

// constructor(private dataSource: StaticDataSource) {
// dataSource.getProducts().subscribe(data => {
// this.products = data;
// this.categories = data.map(p => p.category)
// .filter((c, index, array) => array.indexOf(c) == index).sort() as any;
// });
// }

  constructor(private http: HttpClient) {
    this.http.get<Product[]>(`http://localhost:8080/products`).subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort() as any;
    });
  }

getProducts(category: string = ''): Product[] {
return this.products.filter(p => category == '' || category == p.category);
}

getProduct(id: number): Product {
return this.products.find(p => p.id == id)!;
}

getCategories(): string[] {
return this.categories;
}
}
