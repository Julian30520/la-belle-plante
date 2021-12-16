import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get("http://localhost:3000/list_products");
  }
}
