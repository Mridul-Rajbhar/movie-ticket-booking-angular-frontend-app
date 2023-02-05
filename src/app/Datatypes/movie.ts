import { cast } from "./cast";

//if we use class it will initilize
export class movie{

       public movieGenre:string=null;
        public movieName:string=null;
        public duration:string=null;
        public certificate:string=null;
          public releaseDate:string=null;
          public description:string=null;
          public imageURL: string = null;
        public cast:cast[]=new Array();
        
        constructor(){
    

    
}
}
