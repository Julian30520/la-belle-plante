import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { list_products } from '../../data';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listData = list_products;

  constructor() { }

  ngOnInit(): void {
    var listCategorie = _.pluck(this.listData, 'product_breadcrumb_label');
    var result = [];

    for (const value of listCategorie) {
      if(result.indexOf(value) === -1) { result.push(value); }
    }

    console.log(result);
  }

}
