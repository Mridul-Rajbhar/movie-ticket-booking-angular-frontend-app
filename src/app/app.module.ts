import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderMovieComponent } from './Pages/order-movie/order-movie.component';
import { OrderHistoryComponent } from './Pages/order-history/order-history.component';
import { SingleOrderDetailsComponent } from './Pages/order-history/single-order-details/single-order-details.component';
import {HttpClientModule} from '@angular/common/http';
import { ReviewComponent } from './Shared folder/review-component/review-component.component';
import { DiscountFormComponent } from './Pages/discount-form/discount-form.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderMovieComponent,
    OrderHistoryComponent,
    SingleOrderDetailsComponent,
    ReviewComponent,
    DiscountFormComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
