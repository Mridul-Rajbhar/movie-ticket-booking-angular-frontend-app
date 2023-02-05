import { review } from './../DataTypes/review';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { movies } from '../DataTypes/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _http: HttpClient;
  private _movieURL: string = "http://localhost:8080/api/v1/movies";
  constructor(http: HttpClient) {
    this._http = http;
   }

   public getMovies():Observable<movies[]>{
    return this._http.get<movies[]>(this._movieURL);
   }

   public getMovieByName(movieName:string){
    return this._http.get(this._movieURL+ "/name/" + movieName);
   }

   public getReviewsByMovieName(movieName: string):Observable<review[]>{
    return this._http.get<review[]>(this._movieURL+"/reviews/"+movieName);
   }

   //Show-all-movie-component
  public getMovieGenre(movieGenre: String , pageNumber:number , pageSize:number):Observable<movies[]>{
    return this._http.get<movies[]>(this._movieURL +"/"+ movieGenre + "/" + pageNumber +"/"+pageSize);
  }

  public getMovieByPagination(pageNumber:number, pageSize:number):Observable<movies[]>{
    return this._http.get<movies[]>(this._movieURL + "/" + pageNumber + "/" + pageSize);
   
   public postMovie(newMovie:movie):Observable<movie>{
     return this.http.post<movie>(this._movieURL,newMovie);
    }
    
  public deleteMovie(movieName:string){
  return this.http.delete<movie>(this._movieURL+"/"+ movieName);
  }
}
