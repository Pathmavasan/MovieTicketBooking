import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/register.service';

@Component({
  selector: 'app-cancelcart',
  templateUrl: './cancelcart.component.html',
  styleUrls: ['./cancelcart.component.css']
})
export class CancelcartComponent {
constructor(private registerService:RegisterService,private router:Router){}
moviedata:any;
ngOnInit(){
  this.registerService.GetBookedMovie(sessionStorage.getItem('id')).subscribe(res=>{
    this.moviedata=res;
  })
}
Deletecart(id:any,seatid:any){
this.registerService.deletecart(id).subscribe(res=>{

});
seatid.forEach((seat:any) => {
  this.registerService.unreserveSeat(seat).subscribe(res=>{

  })
});
this.router.navigate(['\cart']);
}
}
