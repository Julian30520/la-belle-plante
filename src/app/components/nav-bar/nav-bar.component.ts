import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  likeCounter : number;
  subPlantLiked!: Subscription;

  constructor(private productService: ProductService) {
    this.likeCounter = 0;
   }

  ngOnInit(): void {
    this.subPlantLiked = this.productService.plantLiked$.subscribe(
      () => {
        console.log('Get new event from Subject');
        this.likeCounter++;
      }
    )
  }

  ngOnDestroy() {
    this.subPlantLiked.unsubscribe();
  }

}
