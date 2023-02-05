import { ActivatedRoute } from '@angular/router';
import { movies } from './../../DataTypes/movie';
import { review } from '../../DataTypes/review';
import { Component, Input } from '@angular/core';
import { user } from 'src/app/DataTypes/user';

@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css']
})
export class ReviewComponent {

  private reviewsArraySize: number;

  @Input() public movieInformation: movies;
  public index1:number = 0;
  public index2:number = 1;
  public index3:number = 2;
  constructor(){
    this.movieInformation = new movies();
    this.movieInformation.reviews = [
      {stars: 5, comment: "It is a good movie 1", user: new user()},
      {stars: 3, comment: "ok ok 2", user: new user()},
      {stars: 2, comment: "not good 3", user: new user()},
      {stars: 1, comment: "very bad 4", user: new user()}
    ];
    this.reviewsArraySize = this.movieInformation.reviews.length;
  }

  next(){
      this.index1 = this.index2;
      this.index2 = this.index3;
      if(this.index3 == this.reviewsArraySize -1){
        this.index3 = 0;
      }
      else{
        this.index3+=1;
      }
    }

  previous(){
    this.index3 = this.index2;
    this.index2 = this.index1;
    if(this.index1 == 0){
      this.index1 = this.reviewsArraySize - 1;
    }
    else{
      this.index1 -=1;
    }
  }
}
