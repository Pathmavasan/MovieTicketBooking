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

  constructor(private registerService: RegisterService,private router:Router,private dataservice:DataserviceService) { }

  ngOnInit() {
    this.registerService.getSeats().subscribe(seats => {
      this.seats = seats;

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
      this.registerService.reserveSeat(seatId).subscribe((res)=>{
        console.log("reseved seat"+res.id);
      })
        seatid.push(seatId);



      this.dataservice.setSelectedSeats(seatid)
      this.router.navigate(['/payment'] );
    });



  }

}
