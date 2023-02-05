import { MovieService } from './Services/movie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './Pages/booking/booking.component';
import { SeatscontinerComponent } from './Pages/booking/seatscontiner/seatscontiner.component';
import { DeleteMoviesComponent } from './Pages/delete-movies/delete-movies.component';
import { AddMoviesComponent } from './Pages/add-movies/add-movies.component';

@NgModule({

    declarations: [
    AppComponent,
    BookingComponent,
    SeatscontinerComponent,
    DeleteMoviesComponent,
    AddMoviesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
