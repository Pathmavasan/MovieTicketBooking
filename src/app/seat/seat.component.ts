import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/register.service';
import { DataserviceService } from '../dataservice.service';
export interface Seat{
number:string;
}
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})

export class SeatComponent {
  seats: any[] = [];
  selectedSeats: number[] = [];
  selected:any='';
   seatid:any[]=[];
   ShowTiming: string='';
   ShowDate:string='';
   MovieName:string='';
   Movieid=sessionStorage.getItem('moviename');
 price=0;
  constructor(private registerService: RegisterService,private router:Router,private dataservice:DataserviceService) { }

  ngOnInit() {
    console.log(this.router.url)
    const rouer=sessionStorage.setItem('target','/payment')
  }
  fetchData(){
    this.registerService.getSeats(this.Movieid,this.ShowDate,this.ShowTiming).subscribe(seats => {
      this.seats = seats;
      sessionStorage.setItem('Timing',this.ShowTiming);
      sessionStorage.setItem('ShowDate',this.ShowDate);
    });
  }
  get seatsByRow() {
    const seatsByRow: any[][] = [];
    const rows = [...new Set(this.seats.map(seat => seat.row))];
    rows.forEach(row => {
      const seatsInRow = this.seats.filter(seat => seat.row === row);
      seatsByRow.push(seatsInRow);
    });
    return seatsByRow;
  }
  toggleSeatSelection(seatId: number) {
    const index = this.selectedSeats.indexOf(seatId);
    if (index !== -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seatId);
    }
  }
  isSelected(seatId: number) {
    return this.selectedSeats.includes(seatId);
  }

  reserveSelectedSeats() {
    const seatid:any[]=[];

    this.selectedSeats.forEach(seatId => {


        seatid.push(seatId);


    if(seatId>0&&seatId<=20){
      this.price=this.price+200;
    }
    else if(seatId>20&&seatId<=80){
      this.price=this.price+400;
    }
    else if(seatId>80&&seatId<=100){
      this.price=this.price+600;
    }
  sessionStorage.setItem('price1',this.price.toString());
      this.dataservice.setSelectedSeats(seatid)
      this.router.navigate(['/payment'] );
      alert(`Seat number [${this.dataservice.getSelectedSeats()}] booked on Date:${sessionStorage.getItem('ShowDate')}  Time:${sessionStorage.getItem('Timing')} Movie:${sessionStorage.getItem('moviename')}`);


    });



  }

}
