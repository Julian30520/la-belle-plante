import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {

  arrayStars: Array<string> = ['star', 'star', 'star', 'star', 'star'];

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(index: number) {
    for (let i = 0; i < this.arrayStars.length; i++) {
      if(i <= index) {
        this.arrayStars[i] = 'star-fill';
      } else {
        this.arrayStars[i] = 'star';
      }
    }
  }

  onMouseLeave() {
    //this.arrayStars = ['star', 'star', 'star', 'star', 'star'];
    this.arrayStars = this.arrayStars.map(x => x = 'star');
  }

}
