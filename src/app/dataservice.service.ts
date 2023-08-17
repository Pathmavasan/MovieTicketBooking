import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{Seat} from 'src/app/seat/seat.component';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  toLowerCase(): any {
    throw new Error('Method not implemented.');
  }
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
  private searchSubject = new BehaviorSubject<string>('');
  public search = this.searchSubject.asObservable();

  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
}
