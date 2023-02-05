import { ReviewService } from './../../Services/review.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-comment',
  templateUrl: './review-comment.component.html',
  styleUrls: ['./review-comment.component.css']
})
export class ReviewCommentComponent {
  
  private _reviewService: ReviewService;
  private _userId: number = 1;//parseInt(localStorage.getItem('userId'));
  private movieName: string = "Pathaan";

  public reviewComment: string = "";

  constructor(reviewService: ReviewService){
    this._reviewService = reviewService;
  }

  public onSubmit(){
    this._reviewService.postOrUpdateReviewComment(this.reviewComment, this._userId, this.movieName).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }
}
