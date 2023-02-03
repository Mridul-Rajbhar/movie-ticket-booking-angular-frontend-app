import { seats } from './../../../Datatypes/seats';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seatscontiner',
  templateUrl: './seatscontiner.component.html',
  styleUrls: ['./seatscontiner.component.css']
})
export class SeatscontinerComponent {

  
  public seatColor:string;

  public type=3;
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


  public selectOrUnSelect(row:string, seatNumber: number, seatType:string)
  {
    console.log(row + " " + seatType + " " + seatNumber);
    if(row =='A' && seatType == "premium")
    {
      if(this.seatPremium1[seatNumber-1].seatNumber==null)
      {
        this.seatPremium1[seatNumber-1].seatRow= row;
        this.seatPremium1[seatNumber-1].seatNumber=seatNumber;
        this.seatPremium1[seatNumber-1].seatType='premium';
         console.log("selected"); /*selected Enable*/
        this.seatPremium1[seatNumber-1].seatStatus="booked";
      }
      else
      {
        this.seatPremium1[seatNumber-1].seatRow= null;
        this.seatPremium1[seatNumber-1].seatNumber=null;
        this.seatPremium1[seatNumber-1].seatType=null;
        this.seatPremium1[seatNumber-1].seatStatus="Available";
        console.log("Available");
      }
    }
    else if(row == 'B' && seatType=="premium")
      {
        if(this.seatPremium2[seatNumber-1].seatNumber==null)
        {
          this.seatPremium2[seatNumber-1].seatRow= row;
          this.seatPremium2[seatNumber-1].seatNumber=seatNumber;
          this.seatPremium2[seatNumber-1].seatType='premium';
           console.log("selected"); /*selected Enable*/
          this.seatPremium2[seatNumber-1].seatStatus="booked";
        }
        else
        {
          this.seatPremium2[seatNumber-1].seatRow= null;
          this.seatPremium2[seatNumber-1].seatNumber=null;
          this.seatPremium2[seatNumber-1].seatType=null;
          this.seatPremium2[seatNumber-1].seatStatus="Available";
          console.log("Available");
        }
      }
      else if(row=='C' && seatType=="gold"){
        if(this.seatGold1[seatNumber-1].seatNumber==null)
        {
          this.seatGold1[seatNumber-1].seatRow= row;
          this.seatGold1[seatNumber-1].seatNumber=seatNumber;
          this.seatGold1[seatNumber-1].seatType='gold';
          this.seatGold1[seatNumber-1].seatStatus="booked";
          console.log("selected"); /*selected Enable*/
        }
        else
        {
          this.seatGold1[seatNumber-1].seatRow= null;
          this.seatGold1[seatNumber-1].seatNumber=null;
          this.seatGold1[seatNumber-1].seatType=null;
          this.seatGold1[seatNumber-1].seatStatus="Available";
          console.log("Available");
        }
      }
        else if(row=='D' && seatType=='gold'){
          if(this.seatGold2[seatNumber-1].seatNumber==null)
          {
            this.seatGold2[seatNumber-1].seatRow= row;
            this.seatGold2[seatNumber-1].seatNumber=seatNumber;
            this.seatGold2[seatNumber-1].seatType='gold';
            this.seatGold2[seatNumber-1].seatStatus="booked";
            console.log("selected"); /*selected Enable*/
          }
          else
          {
            this.seatGold2[seatNumber-1].seatRow= null;
            this.seatGold2[seatNumber-1].seatNumber=null;
            this.seatGold2[seatNumber-1].seatType=null;
            this.seatGold2[seatNumber-1].seatStatus="Available";
            console.log("Available");
          }
        }
     else if(row=='E' && seatType=='gold'){
      if(this.seatGold3[seatNumber-1].seatNumber==null)
          {
            this.seatGold3[seatNumber-1].seatRow= row;
            this.seatGold3[seatNumber-1].seatNumber=seatNumber;
            this.seatGold3[seatNumber-1].seatType='gold';
            this.seatGold3[seatNumber-1].seatStatus="booked";
            console.log("selected"); /*selected Enable*/
          }
          else
          {
            this.seatGold3[seatNumber-1].seatRow= null;
            this.seatGold3[seatNumber-1].seatNumber=null;
            this.seatGold3[seatNumber-1].seatType=null;
            this.seatGold3[seatNumber-1].seatStatus="Available";
            console.log("Available");
          }
        }
        else if(row=='F' && seatType=='gold'){
          if(this.seatGold4[seatNumber-1].seatNumber==null)
          {
            this.seatGold4[seatNumber-1].seatRow= row;
            this.seatGold4[seatNumber-1].seatNumber=seatNumber;
            this.seatGold4[seatNumber-1].seatType='gold';
            this.seatGold4[seatNumber-1].seatStatus="booked";
            console.log("selected"); /*selected Enable*/
          }
          else
          {
            this.seatGold4[seatNumber-1].seatRow= null;
            this.seatGold4[seatNumber-1].seatNumber=null;
            this.seatGold4[seatNumber-1].seatType=null;
            this.seatGold4[seatNumber-1].seatStatus="Available";
            console.log("Available");
          }
        }
        else if(row=='G' && seatType=='silver'){
          if(this.seatSilver1[seatNumber-1].seatNumber==null)
          {
            this.seatSilver1[seatNumber-1].seatRow= row;
            this.seatSilver1[seatNumber-1].seatNumber=seatNumber;
            this.seatSilver1[seatNumber-1].seatType='silver';
            this.seatSilver1[seatNumber-1].seatStatus="booked";
            console.log("selected"); /*selected Enable*/
          }
          else
          {
            this.seatSilver1[seatNumber-1].seatRow= null;
            this.seatSilver1[seatNumber-1].seatNumber=null;
            this.seatSilver1[seatNumber-1].seatType=null;
            this.seatSilver1[seatNumber-1].seatStatus="Available";
            console.log("Available");
          }
        }
        else if(row=='H' && seatType=='silver'){
          if(this.seatSilver2[seatNumber-1].seatNumber==null)
          {
            this.seatSilver2[seatNumber-1].seatRow= row;
            this.seatSilver2[seatNumber-1].seatNumber=seatNumber;
            this.seatSilver2[seatNumber-1].seatType='silver';
            this.seatSilver2[seatNumber-1].seatStatus="booked";
            console.log("selected"); /*selected Enable*/
          }
          else
          {
            this.seatSilver2[seatNumber-1].seatRow= null;
            this.seatSilver2[seatNumber-1].seatNumber=null;
            this.seatSilver2[seatNumber-1].seatType=null;
            this.seatSilver2[seatNumber-1].seatStatus="Available";
            console.log("Available");
          }
        }
        else if(row=='I' && seatType=='silver'){
          if(this.seatSilver3[seatNumber-1].seatNumber==null)
          {
            this.seatSilver3[seatNumber-1].seatRow= row;
            this.seatSilver3[seatNumber-1].seatNumber=seatNumber;
            this.seatSilver3[seatNumber-1].seatType='silver';
            this.seatSilver3[seatNumber-1].seatStatus="booked";
            console.log("selected"); /*selected Enable*/
          }
          else
          {
            this.seatSilver3[seatNumber-1].seatRow= null;
            this.seatSilver3[seatNumber-1].seatNumber=null;
            this.seatSilver3[seatNumber-1].seatType=null;
            this.seatSilver3[seatNumber-1].seatStatus="Available";
            console.log("Available");
          }
        }
    }
    
 
  }
  
  
 






