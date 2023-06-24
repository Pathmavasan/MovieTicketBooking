import { Component } from '@angular/core';
import { RegisterService } from 'src/register.service';

@Component({
  selector: 'app-cancelcart',
  templateUrl: './cancelcart.component.html',
  styleUrls: ['./cancelcart.component.css']
})
export class CancelcartComponent {
constructor(private registerService:RegisterService){}
moviedata:any;
ngOnInit(){
  this.registerService.GetBookedMovie(sessionStorage.getItem('id')).subscribe(res=>{
    this.moviedata=res;
  })
}
}
