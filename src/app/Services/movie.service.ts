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
}
