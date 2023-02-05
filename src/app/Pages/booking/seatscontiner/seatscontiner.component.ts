import { seats } from './../../../DataTypes/seats';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-seatscontiner',
  templateUrl: './seatscontiner.component.html',
  styleUrls: ['./seatscontiner.component.css']
})
export class SeatscontinerComponent {

  @Output() addSeatEvent = new EventEmitter<seats>();
  @Output() removeSeatEvent = new EventEmitter<seats>();

  public seatColor:string;
  
  // public type=3;
  public seatPremium1:seats[] = new  Array(10);
  public seatPremium2:seats[]= new  Array(10);

  public seatGold1:seats[]=new Array(10);
  public seatGold2:seats[]=new Array(10);
  public seatGold3:seats[]=new Array(10);
  public seatGold4:seats[]=new Array(10);

  public seatSilver1:seats[]=new Array(10);
  public seatSilver2:seats[]=new Array(10);
  public seatSilver3:seats[]=new Array(10);
  
  public myRows: string[] = ["A","B","C","D","E","F","G","H","I"];

  constructor(){
    for(let i=0; i<10; i++)
    {
      this.seatPremium1[i] = new seats();
      this.seatPremium2[i]=new seats();
      this.seatGold1[i]=new seats();
      this.seatGold2[i]=new  seats();
      this.seatGold3[i]=new seats();
      this.seatGold4[i]=new seats();
      this.seatSilver1[i]=new seats();
      this.seatSilver2[i]=new seats();
      this.seatSilver3[i]=new seats();
    }
  }
   
  private applySeatInfo(seatsRow: seats[], index:number, row:string, seatNumber: number, seatType: string , seatStatus: string){
     seatsRow[index].seatRow = row;
     seatsRow[index].seatNumber = seatNumber;
     seatsRow[index].seatType= seatType;
     seatsRow[index].seatStatus= seatStatus;
  }

  private createSeatObject(row:string, seatNumber: number, seatType: string){
    this.addSeatEvent.emit({ seatNumber:seatNumber,
      seatRow:row,
      seatType:seatType,
      seatStatus:""
    })
  }
  private deleteSeatObject(row:string, seatNumber: number, seatType: string){
    this.removeSeatEvent.emit({ seatNumber:seatNumber,
      seatRow:row,
      seatType:seatType,
      seatStatus:""
    })
  }
  public selectOrUnSelect(row:string, seatNumber: number, seatType:string)
  {
    // console.log(row + " " + seatType + " " + seatNumber);
    if(row =='A' && seatType == "premium")
    {
      if(this.seatPremium1[seatNumber-1].seatNumber==null){
        this.applySeatInfo(this.seatPremium1, seatNumber-1, row, seatNumber, 'Premium',"booked");
        this.createSeatObject(row, seatNumber, 'Premium');
      }
      else {
        this.applySeatInfo(this.seatPremium1,seatNumber-1, null, null, null, 'Available');
        this.deleteSeatObject(row, seatNumber, 'Premium');
      }
    }
    else if(row == 'B' && seatType=="premium")
      {
        if(this.seatPremium2[seatNumber-1].seatNumber==null)
        {
          this.applySeatInfo(this.seatPremium2, seatNumber-1, row, seatNumber, 'Premium',"booked");
          this.createSeatObject(row, seatNumber, 'Premium');
           //console.log("selected"); /*selected Enable*/
        }
        else
        {
          this.applySeatInfo(this.seatPremium2,seatNumber-1,null,null,null,'Available');
          this.deleteSeatObject(row,seatNumber,'Premium');
          //console.log("Available");
        }
      }
      else if(row=='C' && seatType=="gold"){
        if(this.seatGold1[seatNumber-1].seatNumber==null)
        {
          this.applySeatInfo(this.seatGold1, seatNumber-1, row, seatNumber, 'Gold',"booked");
          this.createSeatObject(row, seatNumber, 'Gold');
        }
        else
        {
          this.applySeatInfo(this.seatGold1,seatNumber-1,null,null,null,'Available');
          this.deleteSeatObject(row,seatNumber,'Gold');
        }
      }
        else if(row=='D' && seatType=='gold'){
          if(this.seatGold2[seatNumber-1].seatNumber==null)
          {
            this.applySeatInfo(this.seatGold2, seatNumber-1, row, seatNumber, 'Gold',"booked");
            this.createSeatObject(row, seatNumber, 'Gold');
          }
          else
          {
            this.applySeatInfo(this.seatGold2,seatNumber-1,null,null,null,'Available');
          this.deleteSeatObject(row,seatNumber,'Gold');
          }
        }
     else if(row=='E' && seatType=='gold'){
      if(this.seatGold3[seatNumber-1].seatNumber==null)
          {
            this.applySeatInfo(this.seatGold3, seatNumber-1, row, seatNumber, 'Gold',"booked");
            this.createSeatObject(row, seatNumber, 'Gold');
          }
          else
          {
            this.applySeatInfo(this.seatGold3,seatNumber-1,null,null,null,'Available');
            this.deleteSeatObject(row,seatNumber,'Gold');
          }
        }
        else if(row=='F' && seatType=='gold'){
          if(this.seatGold4[seatNumber-1].seatNumber==null)
          {
            this.applySeatInfo(this.seatGold4, seatNumber-1, row, seatNumber, 'Gold',"booked");
            this.createSeatObject(row, seatNumber, 'Gold');
          }
          else
          {
            this.applySeatInfo(this.seatGold4,seatNumber-1,null,null,null,'Available');
            this.deleteSeatObject(row,seatNumber,'Gold');
          }
        }
        else if(row=='G' && seatType=='silver'){
          if(this.seatSilver1[seatNumber-1].seatNumber==null)
          {
            this.applySeatInfo(this.seatSilver1, seatNumber-1, row, seatNumber, 'Silver',"booked");
            this.createSeatObject(row, seatNumber, 'Silver');
          }
          else
          {
            this.applySeatInfo(this.seatSilver1,seatNumber-1,null,null,null,'Available');
            this.deleteSeatObject(row,seatNumber,'Silver');
          }
        }
        else if(row=='H' && seatType=='silver'){
          if(this.seatSilver2[seatNumber-1].seatNumber==null)
          {
          this.applySeatInfo(this.seatSilver2, seatNumber-1, row, seatNumber, 'Silver',"booked");
          this.createSeatObject(row, seatNumber, 'Silver');
          }
          else
          {
            this.applySeatInfo(this.seatSilver2,seatNumber-1,null,null,null,'Available');
          this.deleteSeatObject(row,seatNumber,'Silver');
          }
        }
        else if(row=='I' && seatType=='silver'){
          if(this.seatSilver3[seatNumber-1].seatNumber==null)
          {
            this.applySeatInfo(this.seatSilver3, seatNumber-1, row, seatNumber, 'Silver',"booked");
            this.createSeatObject(row, seatNumber, 'Silver');
          }
          else
          {
            this.applySeatInfo(this.seatSilver3,seatNumber-1,null,null,null,'Available');
          this.deleteSeatObject(row,seatNumber,'Silver');
          }
        }
    }
    
 
  }
  
  
 






