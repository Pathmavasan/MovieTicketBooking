import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';
import { RegisterService } from 'src/register.service';
import { CardValidator } from '../../cardvalidator';
@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent {
  payment: any = {};

  constructor(private route:ActivatedRoute,private registerService:RegisterService,private router:Router,private dataservice:DataserviceService,private formBuilder: FormBuilder){
    this.seatid = this.dataservice.getSelectedSeats();
    this.paymentForm.patchValue({
      selectedseats: this.seatid
    });
  }

  seatid:any='';
  visible: boolean = true;
  currentdata=new Date();
  discountprice:any=''
  MovieName=sessionStorage.getItem('moviename');
  Date=sessionStorage.getItem('ShowDate');
  MovieTime=sessionStorage.getItem('Timing');
  Price:any=sessionStorage.getItem('price1');

  ngOnInit() {
}

paymentForm = this.formBuilder.group({
  cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/),CardValidator()]],
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


}
