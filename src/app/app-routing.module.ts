import { SingleOrderDetailsComponent } from './Pages/order-history/single-order-details/single-order-details.component';
import { OrderHistoryComponent } from './Pages/order-history/order-history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMovieComponent } from './Pages/order-movie/order-movie.component';

const routes: Routes = [
  {path: "movies/:movieName/booking/order", component: OrderMovieComponent },
  {path: "order-history", component: OrderHistoryComponent},
  {path:"order-history/:orderId/single-order-details", component: SingleOrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
