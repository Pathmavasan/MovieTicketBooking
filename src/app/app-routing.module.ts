import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { DeletemovieComponent } from './admin/deletemovie/deletemovie.component';
import { UpdatemovieComponent } from './admin/updatemovie/updatemovie.component';
import { LocationComponent } from './location/location.component';
import { LocationGarurdGuard } from 'src/location-garurd.guard';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelcartComponent } from './cancelcart/cancelcart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'location',component:LocationComponent},
  {path:'seat',component:SeatComponent},
  {path:'payment',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
 {path:'moviedetails',component:MoviedetailsComponent},
 {path:'cancelcart',component:CancelcartComponent},
 {path:'admin/addmovie',component:AddmovieComponent},
 {path:'admin/deletemovie',component:DeletemovieComponent},
 {path:'admin/updatemovie',component:UpdatemovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
