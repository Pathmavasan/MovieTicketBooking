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

  getSelectedSeats(): Seat[] {
    return this.selectedSeatsSubject.value;
  }

}
