import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/register.service';
import { DataserviceService } from '../dataservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  seatid:any[]=[];
  currentdata=new Date();
  Price:any=sessionStorage.getItem('price1');
  ngOnInit() {

}
paymentForm = this.formBuilder.group({
  cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
  expirationDate: ['', [Validators.required]],
  cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
  cardHolderName: ['', Validators.required],
  Price:this.Price,
  username:sessionStorage.getItem('id'),
  MovieName:sessionStorage.getItem('moviename'),
  selectedseats:this.seatid,
  Time:this.currentdata.toLocaleString(),

});

onSubmit() {
  if (this.paymentForm.invalid) {
    return;
  }

  // Encrypt payment details and submit the form
  const encryptedPayment = this.encryptPayment(this.paymentForm.value);

  alert("Payment Done");
  this.registerService.processPayment(this.paymentForm.value).subscribe(res => {
    console.log(res);
      }
      );
  this.router.navigate(['/home']);
  this.paymentForm.reset();
}

encryptPayment(payment: any): string {
  // Implement encryption logic here
  // Return the encrypted payment details as a string
  return JSON.stringify(payment);

}
}
