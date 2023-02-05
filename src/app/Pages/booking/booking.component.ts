import { BookingService } from './../../Services/booking.service';
import { seats } from './../../Datatypes/seats';
import { booking } from './../../Datatypes/booking';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  private bookingService:BookingService;
 constructor(BookingService:BookingService){
  this.bookingService=this.bookingService;
 }

  bookingInput: booking=new booking();
  notSelected: boolean = true;
  public selectedSeats: seats[] = [];
  
  public addSeat(newSeat: seats){
    this.notSelected=false;
     this.selectedSeats.push(newSeat);
     console.log(this.selectedSeats);
  }

  public removeSeat(seatToBeRemoved: seats){

    let seatToBeDeleted: seats = this.selectedSeats.filter((element)=>{
        if(element.seatRow==seatToBeRemoved.seatRow && element.seatNumber == seatToBeRemoved.seatNumber
           && element.seatType==seatToBeRemoved.seatType)
         return element;
      })[0];
      let indexToBeDeleted: number = this.selectedSeats.indexOf(seatToBeDeleted);
      this.selectedSeats.splice(indexToBeDeleted,1);
      console.log(this.selectedSeats);

      if(this.selectedSeats.length==0){
        this.notSelected=true;
      }
      else{
        this.notSelected=false;
      }
  }

  onSubmit(data:NgForm){
    console.log(data.value);
    //  this.bookingService.postBooking(this.bookingInput).subscribe((response)=>{
    //   console.log("New Booking:-",response)});
  }
}
