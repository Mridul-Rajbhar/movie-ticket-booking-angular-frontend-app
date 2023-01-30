import { review } from './review';
import { Time } from "@angular/common";

export class movies{
    public movieName: string = null;
    public genre: string = null;
    public duration: Time = null;
    public certificate: string = null;
    public releaseDate: Date = null;
    public description: string = null;
    public reviews: review[] = null;
    constructor(){

    }
}