import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{Seat} from 'src/app/seat/seat.component';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
Seat:any[]=[];
  constructor() { }
  private selectedSeatsSubject = new BehaviorSubject<Seat[]>([]);
  selectedSeats  = this.selectedSeatsSubject.asObservable();
Price=0;


  setSelectedSeats(seats: Seat[]) {
    this.selectedSeatsSubject.next(seats);
  }
  data(){let price=0;
    this.selectedSeatsSubject.value.forEach((seatid:any)=>{
    if(seatid>0&&seatid<=20){
      price=price+200;
    }
    else if(seatid>20&&seatid<=80){
      price=price+400;
    }
    else if(seatid>80&&seatid<=100){
      price=price+600;
    }});
    this.Price=price;
    sessionStorage.setItem("price",(this.Price).toString());
  }
  getSelectedSeats(): Seat[] {
    this.data();
    return this.selectedSeatsSubject.value;
  }

}
