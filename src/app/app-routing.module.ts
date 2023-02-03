import { BookingComponent } from './Pages/booking/booking.component';
import { DeleteMoviesComponent } from './Pages/delete-movies/delete-movies.component';
import { SeatscontinerComponent } from './Pages/booking/seatscontiner/seatscontiner.component';
import { AddMovieComponent } from './UIComponent/add-movie/add-movie.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"movieDetails",
    component:AddMovieComponent
  },
  {
    path:"booking",
    component:BookingComponent
  },
  {
    path:"deleteMovie",
    component:DeleteMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
