import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/register.service';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-cancelcart',
  templateUrl: './cancelcart.component.html',
  styleUrls: ['./cancelcart.component.css']
})
export class CancelcartComponent {
constructor(private registerService:RegisterService,private router:Router,private logger:NGXLogger){}
moviedata:any;
Seatid:any=[];
ngOnInit(){
  this.registerService.GetBookedMovie(sessionStorage.getItem('id')).subscribe(res=>{
    this.moviedata=res;
  },
  (error)=>{
    this.logger.error("error encountered");
  })
}
Deletecart(id:any,seatid:any){
  this.Seatid=seatid;
this.registerService.deletecart(id).subscribe(res=>{

});

this.Deleteseat()

this.router.navigate(['home']);
}
Deleteseat(){
  this.Seatid.forEach((seat:any) => {
    this.registerService.unreserveSeat(sessionStorage.getItem('moviename'),sessionStorage.getItem('ShowDate'),sessionStorage.getItem('Timing'),seat).subscribe(res=>{

    })
  });
}
}
