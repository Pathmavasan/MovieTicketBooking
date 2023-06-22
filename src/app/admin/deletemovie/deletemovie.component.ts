import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { RegisterService } from 'src/register.service';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent {
  constructor(private registerService:RegisterService,private router:Router){}
Moviedata:any='';
ngOnInit(){
this.registerService.GetMovieName().subscribe(res=>{
this.Moviedata=res;
});
}
DeleteMovie(Name:any){
  this.registerService.deleteMovie(Name).subscribe(res=>{
    this.router.navigate(['home']);
  });
}
}
