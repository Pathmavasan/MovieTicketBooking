import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/register.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private registerService:RegisterService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }
  registerForm=this.fb.group({
    username:this.fb.control('',[Validators.required,Validators.minLength(4)]),
    mobileno:this.fb.control('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    emailid:this.fb.control('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")]),
    password:this.fb.control('',[Validators.required,Validators.pattern(""),Validators.minLength(8)]),
    role:this.fb.control('')
  })
  submitForm(){
    if(this.registerForm.valid){
      this.registerService.Procedregister(this.registerForm.value).subscribe(res=>{
       alert("register Sucess");

        this.router.navigate(['login']);
      });
    }
    else{
      alert("problem occured")
    }
  }
}


