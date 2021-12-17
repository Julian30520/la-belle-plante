import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  plantLiked$ = new Subject<any>();
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://localhost:3000/list_products");
  }
}
