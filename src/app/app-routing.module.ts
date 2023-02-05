import { HomepageComponent } from './Pages/homepage/homepage.component';
import { DiscountFormComponent } from './Pages/discount-form/discount-form.component';
import { SingleOrderDetailsComponent } from './Pages/order-history/single-order-details/single-order-details.component';
import { OrderHistoryComponent } from './Pages/order-history/order-history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMovieComponent } from './Pages/order-movie/order-movie.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomepageComponent},
  {path:"admin/discount", component: DiscountFormComponent},
  {path: "movies/:movieName/booking/order", component: OrderMovieComponent },
  {path: "order-history", component: OrderHistoryComponent},
  {path:"order-history/:orderId/single-order-details", component: SingleOrderDetailsComponent}
  // {path:"movies/:movieName", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
