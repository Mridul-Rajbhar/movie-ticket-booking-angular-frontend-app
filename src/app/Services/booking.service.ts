import { Observable } from 'rxjs';
import { booking } from './../DataTypes/booking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _http: HttpClient;
  private _bookingUrl: string = "http://localhost:8080/api/v1/booking";
  constructor(http: HttpClient) {
    this._http = http;
   }

   public getBookingById(bookingId: number):Observable<booking>{
      return this._http.get<booking>(this._bookingUrl+"/" + bookingId);
   }
}
