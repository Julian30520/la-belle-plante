import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-plante',
  templateUrl: './card-plante.component.html',
  styleUrls: ['./card-plante.component.scss']
})
export class CardPlanteComponent implements OnInit, OnChanges {

  @Input() flower: any;
  
  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.flower.product_url_picture);
  }

}
