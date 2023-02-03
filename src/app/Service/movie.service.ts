import { movie } from '../DataTypes/movies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = "http://localhost:8080/api/v1/movies";

  constructor(private http: HttpClient) { }

  //Show-all-movie-component
  public getMovies():Observable<movie[]>{
    return this.http.get<movie[]>(this.url);
  }


  public postMovie(newMovie: movie):Observable<movie>{
    return this.http.post<movie>(this.url , newMovie);
  }

  //Show-all-movie-component
  public getMovieGenre(movieGenre: String , pageNumber:number , pageSize:number):Observable<movie[]>{
    return this.http.get<movie[]>(this.url +"/"+ movieGenre + "/" + pageNumber +"/"+pageSize);
  }

  //Movie-details-component
  public getMovieByName(movieName:string):Observable<movie>{
    return this.http.get<movie>(this.url + "/" + movieName);
  }


  public getMovieByPagination(pageNumber:number, pageSize:number):Observable<movie[]>{
    return this.http.get<movie[]>(this.url + "/" + pageNumber + "/" + pageSize);
  }
}
