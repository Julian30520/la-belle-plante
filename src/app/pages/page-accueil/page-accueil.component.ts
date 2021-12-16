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
  categories: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    let listCategorie = _.pluck(this.listData, 'product_breadcrumb_label');
    let result = [];

    for (const value of listCategorie) {
      if(result.indexOf(value) === -1) { result.push(value); }
    }

    result.forEach(categorie => this.categories.push(categorie.charAt(0).toUpperCase() + categorie.slice(1)));
    //this.categories.forEach(element => console.log(element));

    /*
    Méthode à Jeremy :
    const listAllCategories = this.listData.map(product => product.product_breadcrumb_label);
    const listUniqueCategories = _.uniq(listAllCategories);

    Ou :

    const listUniqueJsCategories = new Set(listAllCategories); // Permet de supprimer les doublons (le Set n'accepte pas les doublons de base)
    */
  }

}
