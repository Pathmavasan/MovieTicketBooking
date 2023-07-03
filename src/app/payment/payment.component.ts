import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { RegisterService } from 'src/register.service';
import { DataserviceService } from '../dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
  payment: any = {};

  constructor(private route:ActivatedRoute,private registerService:RegisterService,private router:Router,private dataservice:DataserviceService,private formBuilder: FormBuilder){
    this.seatid = this.dataservice.getSelectedSeats();
    this.paymentForm.patchValue({
      selectedseats: this.seatid
    });
  }
  receivedValue:any[]=[];
  seatid:any='';
  visible: boolean = true;
  currentdata=new Date();
  discountprice:any=''
  MovieName=sessionStorage.getItem('moviename');
  Date=sessionStorage.getItem('ShowDate');
  MovieTime=sessionStorage.getItem('Timing');
  Price:any=sessionStorage.getItem('price1');
  remainingTime: any='';
  ngOnInit() {
this.calculateRemainingTime();
setTimeout(() => {
  this.visible = false;
}, 10000);
interval(1000).subscribe(() => {
  this.calculateRemainingTime();
});
}
calculateRemainingTime() {
  const currentDate = new Date();
  const remainingTimeInMillis = this.registerService.offerEnd.getTime() - currentDate.getTime();

  if (remainingTimeInMillis > 0) {
    this.discountprice=(this.Price*this.registerService.discountPercentage)/100;
    this.remainingTime={price:this.discountprice};
  }
else{
  this.discountprice=this.Price;
  this.remainingTime=null;
}}

paymentForm = this.formBuilder.group({
  cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
  expirationDate: ['', [Validators.required]],
  cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
  cardHolderName: ['', Validators.required],
  Price:this.discountprice,
  username:sessionStorage.getItem('id'),
  MovieName:sessionStorage.getItem('moviename'),
  selectedseats:this.seatid,
  Time:this.currentdata.toLocaleString(),
  ShowTime:sessionStorage.getItem('Timing'),
  ShowDate:sessionStorage.getItem('ShowDate')
});

onSubmit() {
  if (this.paymentForm.invalid) {
    return;
  }

 const encryptedPayment = this.encryptPayment(this.paymentForm.value);


  this.seatid.forEach((seatId: number)=>{
  this.registerService.reserveSeat(sessionStorage.getItem('moviename'),sessionStorage.getItem('ShowDate'),sessionStorage.getItem('Timing'),seatId).subscribe((res)=>{
    console.log("reseved seat"+res.id);
  })})
  this.registerService.processPayment(this.paymentForm.value).subscribe(res => {
    console.log(res);
      }
      );
      alert('Payment done ');
      this.router.navigate(['cart']);
  this.paymentForm.reset();
}

encryptPayment(payment: any): string {
  return JSON.stringify(payment);

}
}
