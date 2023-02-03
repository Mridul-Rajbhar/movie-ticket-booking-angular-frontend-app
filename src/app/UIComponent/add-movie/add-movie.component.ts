import { cast } from './../../Datatypes/cast';
import { movie} from './../../Datatypes/movie';
import { MovieService } from './../../Services/movie.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent {

  imageUrl:string="../assets/images/Movies/defaultmovieimage.jpg";

    movieInput: movie=new movie();
    submitted: boolean = false;
    movieService:MovieService;
    movieCast:cast[]=[];
    constructor(movieService:MovieService){
          this.movieService=movieService;
          this.movieCast.push(new cast());
          this.movieCast.push(new cast());
          this.movieCast.push(new cast());
          this.movieCast.push(new cast());
          
    }
   
    onSelect(event:any)
    {
      if(event.target.files[0]){
        let reader=new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload=(event:any) =>{
          this.imageUrl=event.target.result;
        };
      }
    }
    
    onMovieSubmit()
    { 
      console.log("onsubmit method is called...");
      this.submitted = true;
      console.log(this.submitted);
      console.log(this.movieCast);
      let imageLocalUrl = "/assets/images/Movies/" + this.movieInput.movieName + ".jpg"
      this.movieInput.imageURL= imageLocalUrl;
      this.movieInput.casts = this.movieCast;
    
      this.movieService.postMovie(this.movieInput).subscribe((response)=>{
        //alert("New Movie added successfully on the page");
        console.log("New Movie:-",response)});
      }
    

   /* public addCasts():void{
console.log("this is add cast method");
  this.movieInput.casts.push();
    }
    
  
public removeCast(castToDelete:cast):void{
  let index:number=this.movieInput.casts.indexOf(castToDelete);
  this.movieInput.casts.splice(index,1);
}*/

}








































  
  /*addCast(){
    this.cast.push(this.castAdded())
  }
  get cast():FormArray{
    return this.myReactiveForm.get('cast') as FormArray;
  }
  
  castAdded(){
    return this.form_builder.group({
      cname:['',[Validators.required]],
      profession:['',[Validators.required]]
    });
  }
  removeCast(){
    this.cast.removeAt(this.cast.length-1);
  }*/

