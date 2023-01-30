import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private _http: HttpClient;
  private _employeeURL: string = "http://localhost:8080/api/v1/movies";
  constructor(http: HttpClient) {
    this._http = http;
   }

   public getMovies(){
    return this._http.get(this._employeeURL);
   }

   public getMovieByName(movieName:string){
    return this._http.get(this._employeeURL+movieName);
   }

}
