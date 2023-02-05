import { NgForm } from '@angular/forms';
import { MovieService } from './../../Services/movie.service';
import { movie } from './../../Datatypes/movie';
import { Component } from '@angular/core';
import { cast } from 'src/app/Datatypes/cast';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent {
  imageUrl:string="../assets/images/Movies/defaultmovieimage.jpg";
 
  movieInput: movie=new movie();
  submitted: boolean = false;
  private movieService:MovieService;
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
    if(event.target.files[0])
    {
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
    this.movieInput.cast = this.movieCast;
    this.movieService.postMovie(this.movieInput).subscribe((response)=>{
      alert("New Movie added successfully on the page");
      console.log("New Movie:-",response)});
    }
  
}
