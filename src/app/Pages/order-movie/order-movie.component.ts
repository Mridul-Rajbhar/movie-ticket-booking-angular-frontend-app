import { MovieServiceService } from './../../Services/movie-service.service';
import { HttpClient } from '@angular/common/http';
import { booking } from './../../DataTypes/booking';
import { movies } from './../../DataTypes/movie';
import { order } from './../../DataTypes/order';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-movie',
  templateUrl: './order-movie.component.html',
  styleUrls: ['./order-movie.component.css']
})
export class OrderMovieComponent {
  private _activatedRoute: ActivatedRoute;
  private _movieNameToBeFounded: string;
  private _service: MovieServiceService;

  public submitted: boolean = false;
  public orderToPlaced: order;
  public movieToOrder: movies;
  public bookingMovie: booking;
  public discountedPrice: number;
  public withoutDiscountPrice:number;

  constructor(activatedRoute: ActivatedRoute, service: MovieServiceService){
    this._activatedRoute = activatedRoute;
    this._service = service;
    this.orderToPlaced = new order();
    this.movieToOrder = new movies();
    this.bookingMovie = new booking();
  }

  ngOnInit(){
    this._activatedRoute.paramMap.subscribe(
      (response)=>{
        this._movieNameToBeFounded = response.get('movieName');
      }
    )

    this._service.getMovieByName(this._movieNameToBeFounded).subscribe(
      (response: movies)=>{
        this.movieToOrder = response;
      }
    );

  }

  onSubmit(){

  }
}
