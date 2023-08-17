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

  }
  userdata:any="";
 targeturl:any=sessionStorage.getItem('target');
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
        this.id=this.loginForm.value.username;
        const role=this.userdata.find((data:any)=>data.role==='admin')
        sessionStorage.setItem('id',this.id);
if(user){
          alert("Login Successfull");
            sessionStorage.setItem('username',JSON.stringify(this.userdata.username));
            if(role)
            sessionStorage.setItem('userrole','admin');
            if(this.targeturl){
              this.router.navigateByUrl(this.targeturl);
            }
            else{
            this.router.navigate(['home']);}
        }else {
          alert("Invalid credentials.");
        }

      });
    }
  }

}
