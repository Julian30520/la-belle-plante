import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {

  arrayStars: {stateSelectedUser : boolean, stateHoverUser : boolean}[];

  constructor() { 
    this.arrayStars = [];

    for (let index = 0; index < 5; index++) {
      this.arrayStars.push(
        {
          stateSelectedUser : false,
          stateHoverUser : false
        }
      );
    }
  }

  ngOnInit(): void {
  }

  onMouseOver(index: number) {
    for (let i = 0; i < this.arrayStars.length; i++) {
      if(i <= index) {
        this.arrayStars[i].stateHoverUser = true;
      } else {
        this.arrayStars[i].stateHoverUser = false;
      }
    }
  }

  onMouseLeave() {
    //this.arrayStars = ['star', 'star', 'star', 'star', 'star'];
    const tempTab = [];
    for (let index = 0; index < this.arrayStars.length; index++) {
      tempTab.push(
        {
          stateSelectedUser : this.arrayStars[index].stateSelectedUser,
          stateHoverUser : this.arrayStars[index].stateSelectedUser
        }
      );
    }
    this.arrayStars = [...tempTab];
  }

  onClickStar(starIndex: number) {
    for (let i = 0; i < this.arrayStars.length ; i++) {
      if(i <= starIndex) {
        this.arrayStars[i].stateSelectedUser = true;
      } else {
        this.arrayStars[i].stateSelectedUser = false;
      }
    }
  }
}
