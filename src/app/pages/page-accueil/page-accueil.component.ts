import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import * as _ from 'underscore';
import { any } from 'underscore';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listData: any;
  categories: Array<string> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getData().subscribe((data: any) => { 
      this.listData = data; 
      let listCategorie = _.pluck(this.listData, 'product_breadcrumb_label');
      let result = [];

      for (const value of listCategorie) {
        if(result.indexOf(value) === -1) { result.push(value); }
      }

      result.forEach(categorie => this.categories.push(categorie.charAt(0).toUpperCase() + categorie.slice(1)));
        console.log(data);
    });

    /*
    Méthode à Jeremy :
    const listAllCategories = this.listData.map(product => product.product_breadcrumb_label);
    const listUniqueCategories = _.uniq(listAllCategories);

    Ou :

    const listUniqueJsCategories = [...new Set(listAllCategories)]; // Permet de supprimer les doublons (le Set n'accepte pas les doublons de base)
    */
  }

}
