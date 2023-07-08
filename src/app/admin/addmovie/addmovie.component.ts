import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/register.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {

  constructor(private registerService:RegisterService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }
  file:any;
  getfile(event:any){
    this.file=event.target.files[0];
  }
  addForm=this.fb.group({
    MovieName:this.fb.control('',[Validators.required]),
    Type:this.fb.control('',[Validators.required]),
    Image:this.fb.control(''),
    Image1:this.fb.control(''),
    About:this.fb.control('',[Validators.required]),
    Ratting:this.fb.control('',[Validators.required]),
    vedio:this.fb.control('',[Validators.required])
     })
  addMovieForm(){
    if(this.addForm.valid){
      this.registerService.addMovie(this.addForm.value).subscribe(res=>{
       alert("Movie added Successfully");

        this.router.navigate(['home']);
      });
    }
    else{
      alert("problem occured")
    }
  }
}
