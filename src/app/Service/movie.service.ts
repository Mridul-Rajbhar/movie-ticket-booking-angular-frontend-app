import { movies } from '../DataTypes/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _http: HttpClient; 
  private _movieURL: string = "http://localhost:8080/api/v1/movies";
   constructor(http: HttpClient) { this._http = http;}

  //Show-all-movie-component
  public getMovies():Observable<movies[]>{
    return this._http.get<movies[]>(this._movieURL);
  }


  public postMovie(newMovie: movies):Observable<movies>{
    return this._http.post<movies>(this._movieURL , newMovie);
  }

  //Show-all-movie-component
  public getMovieGenre(movieGenre: String , pageNumber:number , pageSize:number):Observable<movies[]>{
    return this._http.get<movies[]>(this._movieURL +"/"+ movieGenre + "/" + pageNumber +"/"+pageSize);
  }

  //Movie-details-component
  public getMovieByName(movieName:string):Observable<movies>{
    return this._http.get<movies>(this._movieURL + "/" + movieName);
  }


  public getMovieByPagination(pageNumber:number, pageSize:number):Observable<movies[]>{
    return this._http.get<movies[]>(this._movieURL + "/" + pageNumber + "/" + pageSize);
  }
}
