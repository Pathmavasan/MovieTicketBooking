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
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelcartComponent } from './cart/cancelcart.component';
import { CreditcardComponent } from './payment/paymentcard/creditcard/creditcard.component';
import { DebitcardComponent } from './payment/paymentcard/debitcard/debitcard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'location',component:LocationComponent},
  {path:'seat',component:SeatComponent},
  {path:'payment',component:PaymentComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
 {path:'moviedetails',component:MoviedetailsComponent},
 {path:'cart',component:CancelcartComponent},
 {path:'addmovie',component:AddmovieComponent},
 {path:'deletemovie',component:DeletemovieComponent},
 {path:'updatemovie',component:UpdatemovieComponent},
 {path:'creditcard',component:CreditcardComponent},
 {path:'debitcard',component:DebitcardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
