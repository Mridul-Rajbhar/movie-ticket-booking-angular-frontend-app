import { BookingComponent } from './Pages/booking/booking.component';
import { DeleteMoviesComponent } from './Pages/delete-movies/delete-movies.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './Pages/add-movies/add-movies.component';

const routes: Routes = [
  {
    path:"movieDetails",
    component:AddMoviesComponent
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
