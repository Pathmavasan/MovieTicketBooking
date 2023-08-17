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
imageurl:any='';
  constructor(private registerService:RegisterService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }
  file:any;
  getfile(event:any){
    const selectedFile=event.target.files[0];
    this.uploadImage(selectedFile);
  }
  uploadImage(file:File){
    const reader=new FileReader();
    reader.onload=(e:any)=>{
      const imageUrl=e.target.result;
      this.imageurl=imageUrl;
      console.log(this.imageurl);
      const imageControl = this.addForm.get('Image');
      if (imageControl) {
        imageControl.setValue(this.imageurl);
      }    };
    reader.readAsDataURL(file);
  }
  addForm=this.fb.group({
    Name:this.fb.control('',[Validators.required]),
    Type:this.fb.control('',[Validators.required]),
    Image:this.fb.control('',[Validators.required]),
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
