import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { UpdatemovieComponent } from './admin/updatemovie/updatemovie.component';
import { DeletemovieComponent } from './admin/deletemovie/deletemovie.component';
import { LocationComponent } from './location/location.component';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelcartComponent } from './cart/cancelcart.component';
import { PopupmessageComponent } from './popupmessage/popupmessage.component';
import { CreditcardComponent } from './payment/paymentcard/creditcard/creditcard.component';
import { DebitcardComponent } from './payment/paymentcard/debitcard/debitcard.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    MoviedetailsComponent,
    AddmovieComponent,
    UpdatemovieComponent,
    DeletemovieComponent,
    LocationComponent,
    SeatComponent,
    PaymentComponent,
    CancelcartComponent,
    PopupmessageComponent,
    CreditcardComponent,
    DebitcardComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
