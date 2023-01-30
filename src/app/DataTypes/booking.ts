import { seats } from './seats';
import { Time } from "@angular/common";

export class booking{
    public bookingTime: Time = null;
    public bookingDate: Date = null;
    public movieFormat: string = null;
    public movieLanguage: string = null;
    public seatsBooked: seats[] = new Array();
    constructor(){

    }
}