import { Component,OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RegisterService } from 'src/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
Title:any="Movie Ticket Booking";

  moviedata: any="";
  data:any=
 sessionStorage.getItem('userrole')?.toString();

constructor(private registerService:RegisterService,private router:Router){}

ngOnInit() {
  if(sessionStorage.getItem('location')!=null){
    this.registerService.GetMovieNamebyLocation(sessionStorage.getItem('location')?.toString()  ).subscribe((data)=>{
      this.moviedata=data;})

  }else{
this.registerService.GetMovieName().subscribe((data)=>{
  this.moviedata=data;

})
  }

}


}
