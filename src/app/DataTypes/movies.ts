import { cast } from './cast';
import { review } from './review';
import { Time } from "@angular/common";

export class movie{
    
    public movieGenre:String = null;
    public movieName:String = null;
    public duration: Date= null;
    public certificate:String = null;
    public releaseDate:Date = null;
    public description:String = null;
    public imageURL:String = null;
    public review:review[]=null;
    public cast:cast[] = null;
    constructor(){
        
    }
}