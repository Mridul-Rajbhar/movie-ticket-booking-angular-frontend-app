import { order } from './../../DataTypes/order';
import { OrderService } from './../../Services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from './../../Services/booking.service';
import { seats } from './../../DataTypes/seats';
import { booking } from './../../DataTypes/booking';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  private _movieName: string;
  private bookingService:BookingService;
  private orderService: OrderService;
 constructor(private router: Router, BookingService:BookingService,
    private _activatedRoute: ActivatedRoute, orderService: OrderService){
  this.bookingService=this.bookingService;
  this.orderService = this.orderService;
 }

  bookingInput: booking=new booking();
  notSelected: boolean = true;
  public selectedSeats: seats[] = [];
  // public canSelectSeats: boolean= false;

  ngOnInit(){
    this._activatedRoute.paramMap.subscribe((response)=>
        {
      this._movieName = (response.get('movieName'));
    })
  }
  
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
    // this.orderService.bookingForm = this.bookingInput;
    this.bookingInput.seats = this.selectedSeats;
    this.router.navigate(['movies/'+this._movieName+'/booking/order'],{
      state:{bookingInput: this.bookingInput}
    });
  }
}
