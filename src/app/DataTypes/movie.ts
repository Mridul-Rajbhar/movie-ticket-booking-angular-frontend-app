import { cast } from './cast';
import { review } from './review';


export class movies{
    
    public movieGenre:string = null;
    public movieName:string = null;
    public duration: Date= null;
    public certificate:string = null;
    public releaseDate:Date = null;
    public description:string = null;
    public imageURL:string = null;
    public review:review[]=null;
    public cast:cast[] = null;
    constructor(){
        
    }
}