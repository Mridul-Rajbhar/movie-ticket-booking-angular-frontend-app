import { star } from './../../DataTypes/star';
import { ReviewService } from './../../Services/review.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-star',
  templateUrl: './review-star.component.html',
  styleUrls: ['./review-star.component.css']
})
export class ReviewStarComponent {
    private _reviewService: ReviewService;
    private _userId: number = 1;//parseInt(localStorage.getItem('userId'));
    private movieName: string = "Pathaan";
    
    public stars:star[] = []
    constructor(reviewService: ReviewService){
      this._reviewService = reviewService;
      this.stars = [
        new star(),
        new star(),
        new star(),
        new star(),
        new star()
    ]
    }

    private giveStars(star:star){
      let index: number = this.stars.indexOf(star);
      for(let i=0; i<=index; i++)
      {
        this.stars[i].selected=true;
      }
    }

    private removeStars(star:star){
      let index: number = this.stars.indexOf(star);
      for(let i=index+1; i<this.stars.length; i++)
      {
        this.stars[i].selected=false;
      }
    }
    
    giveReview(star:star){
      if(star.selected == true){
        this.removeStars(star);
      }
      else{
        this.giveStars(star);
      }
      console.log(star);
    }

    postOrUpdateReviewStar(starNumber: number, star: star){
      // if(star.selected != true)
        starNumber+=1;
      
      console.log("stars number: " + starNumber);
      this._reviewService.postOrUpdateReviewStar(starNumber, this._userId, this.movieName).subscribe(
        (response)=>{
          console.log(response);
        }
      );
    }
}
