import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePosterComponent } from './Shared folder/movie-poster/movie-poster.component';
import { ShowAllMovieComponent } from './Pages/show-all-movie/show-all-movie.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { MovieCardComponent } from './Shared folder/movie-card/movie-card.component';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviePosterComponent,
    ShowAllMovieComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
