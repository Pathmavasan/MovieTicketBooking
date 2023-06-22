import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:String="";
  password:String="";
  User: String="";
  id:any='';
  constructor(private fb:FormBuilder,private registerService:RegisterService,private router:Router){
sessionStorage.clear();
  }
  userdata:any="";

  loginForm=this.fb.group(
    {
      username:this.fb.control('',[Validators.required,Validators.minLength(4)]),
      password:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.pattern("")])
    }
  )
  loginFormSubmit(){

    if(this.loginForm.valid){
      this.registerService.Getbycode(this.loginForm.value.username).subscribe(res=>{
        this.userdata=res;
        const user=this.userdata.find((data:any)=>data.username===this.loginForm.value.username&&data.password===this.loginForm.value.password);
        const userid=this.userdata.find((data:any)=>this.id=data.username);
        console.log(this.id);
        sessionStorage.setItem('id',this.id);
console.log(this.userdata.username);
if(user){

          alert("Login Successfull");
            sessionStorage.setItem('username',JSON.stringify(this.userdata.username));
            if(this.loginForm.value.username==='Vasu')
            sessionStorage.setItem('userrole','admin');
            this.router.navigate(['home']);
        }else {
          alert("Invalid credentials.");
        }

      });
    }
  }

}
