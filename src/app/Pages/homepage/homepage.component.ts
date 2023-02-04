import { MovieService } from './../../Services/movie.service';
import { movies } from './../../DataTypes/movie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  private _movieService: MovieService;

  public actionMovies: movies[] = null;
  public adventureMovies: movies[] = null;
  public dramaMovies: movies[] = null;
  public romanceMovies: movies[] = null;
  public allMovies: movies[] = null;

  constructor(movieService: MovieService){
    localStorage.setItem('userId', '1');
    this._movieService = movieService;
    this._movieService.getMovies().subscribe(
      (response: movies[])=>{
        this.allMovies = response;
        console.log(this.allMovies);
        this.actionMovies = this.allMovies.filter((element)=>element.movieGenre=="Action");
        this.adventureMovies = this.allMovies.filter((element)=>element.movieGenre=="Adventure");
        this.dramaMovies = this.allMovies.filter((element)=>element.movieGenre=="Drama");
        this.romanceMovies = this.allMovies.filter((element)=>element.movieGenre=="Romance");

      }
    );
  }

  ngOnInit(){
    
  }

}
