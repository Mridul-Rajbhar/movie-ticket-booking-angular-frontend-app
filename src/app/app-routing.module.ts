import { ShowAllMovieComponent } from './Pages/show-all-movie/show-all-movie.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "MovieDetails/:movieName", component: MovieDetailsComponent },
  {path: "ShowAllMovie", component: ShowAllMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
