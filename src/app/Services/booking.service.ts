import { booking } from './../Datatypes/booking';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  http:HttpClient;
  url:"http://localhost:8080/api/v1/bookings"
    constructor(http:HttpClient){
      this.http=http;
    }
    public getBooking():Observable<booking[]>{
      return this.http.get<booking[]>(this.url);
   }
   public postBooking(newBooking:booking):Observable<booking>{
      return this.http.post<booking>(this.url,newBooking);
   }
  
}
