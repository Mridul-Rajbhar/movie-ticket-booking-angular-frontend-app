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

  @Input() public movieInformation: movies;
  public index1:number = 0;
  public index2:number = 1;
  public index3:number = 2;
  constructor(){
    this.movieInformation = new movies();
    this.movieInformation.reviews = [
      {stars: 5, comment: "It is a good movie", user: new user()},
      {stars: 3, comment: "ok ok", user: new user()},
      {stars: 2, comment: "not good", user: new user()},
      {stars: 1, comment: "very bad", user: new user()}
    ];
  }



}
