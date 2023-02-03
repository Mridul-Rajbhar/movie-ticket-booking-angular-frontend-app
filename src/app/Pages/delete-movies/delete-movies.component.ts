import { movie } from './../../Datatypes/movie';
import { MovieService } from './../../Services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-movies',
  templateUrl: './delete-movies.component.html',
  styleUrls: ['./delete-movies.component.css']
})
export class DeleteMoviesComponent {

  private movieService: MovieService;

  allMovie:movie[]=[];
  movieToDelete:movie;

  constructor(movieService: MovieService){
    this.movieService=movieService;
    this.movieService.getMovies().subscribe(
      (result: movie[])=>{
      this.allMovie=result;
      console.log(this,this.allMovie)
      }
    );
  }

public Ondelete(movieToBeDeleted: movie)
{
  this.movieService.deleteMovie(movieToBeDeleted.movieName).subscribe(
    (response)=>{
      console.log(response);
      console.log(this.allMovie);
      let movieIndexToBeDeleted:number = this.allMovie.indexOf(movieToBeDeleted);
      console.log(movieIndexToBeDeleted);
      if(movieIndexToBeDeleted != -1)
        this.allMovie.splice(movieIndexToBeDeleted,1);
    },
    (error)=>{
      console.log(error);
    }
  )
}
}