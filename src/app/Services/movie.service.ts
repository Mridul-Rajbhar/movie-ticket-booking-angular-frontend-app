import { movie } from './../Datatypes/movie';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http:HttpClient;
  url="http://localhost:8080/api/v1/movies";
 
  constructor(http:HttpClient) { 
    this.http=http;
  }
 public getMovies():Observable<movie[]>{
     return this.http.get<movie[]>(this.url);
  }
  public postMovie(newMovie:movie):Observable<movie>{
     return this.http.post<movie>(this.url,newMovie);
  }
  public deleteMovie(movieName:string){
  return this.http.delete<movie>(this.url+"/"+ movieName);
  }
  public getMovieByName(movieName:string):Observable<movie>{
    return this.http.get<movie>(this.url+"/"+ movieName); 
  }
}

