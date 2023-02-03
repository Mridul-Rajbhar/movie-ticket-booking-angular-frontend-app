import { cast } from "./cast";

//if we use class it will initilize
export class movie{

       public movieGenre:string=null;
        public movieName:string=null;
        public duration:Date=null;
        public certificate:string=null;
          public releaseDate:Date=null;
          public description:string=null;
          public imageURL: string = null;
        public casts:cast[]=new Array();
        
        constructor(){
    

    
}
}
