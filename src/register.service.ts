import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  offerEnd: Date = new Date('2023-07-18T21:44:59');
  discountPercentage: number=50;
  baseUrl="http://localhost:3000/Register";
  MovieUrl="http://localhost:3000/Movie";
  PaymentURL="http://localhost:3000/payment"
  constructor(private client:HttpClient,private router:Router) { }
GetAll(){
  return this.client.get(this.baseUrl);
}
Getbycode(code:any):Observable<String>{
  return this.client.get<String>(this.baseUrl+"?username="+code);
}
GetMovieName():Observable<any>{
  return this.client.get<any>("http://localhost:3000/Movie");
}
GetMovieNamebyLocation(body:any):Observable<any>{
  return this.client.get<any>("http://localhost:3000/Movie?location="+body);
}
GetMoviebyName( Name:String):Observable<any>{
  return this.client.get<any>("http://localhost:3000/Movie?Name="+Name);
}
Procedregister(inputdata:any){
  return this.client.post("http://localhost:3000/Register",inputdata);
}
Updateuser(code:any,inputdata:any){
  return this.client.get(this.baseUrl+'/'+code,inputdata)
}
isloogedin(){
  return sessionStorage.getItem('username')!=null;
}
GetUserRole(){
  return sessionStorage.getItem('username')!=null?sessionStorage.getItem('userrole')?.toString()==='admin':'';
}
processPayment(body:any){
return this.client.post("http://localhost:3000/payment",body);
}
addUserInfo(body:any){
return this.client.post("http://localhost:3000/Register",body);
}
addMovie(body:any){
  return this.client.post("http://localhost:3000/Movie",body);
}
updateMovie(Name:any,body:any){
  const url=`${this.MovieUrl}/${Name}`
  return this.client.put(url,{body});
}
deleteMovie(body:any){
  return this.client.delete(`${this.MovieUrl}/${body}`);
}
GetBookedMovie(body:any){
return this.client.get("http://localhost:3000/payment?username="+body);
}
deletecart(body:any){
  return this.client.delete(`${this.PaymentURL}/${body}`);
}
logoutuser(){

   sessionStorage.clear();
   this.router.navigate([""]);
}
getSeats(body:any,date:any,time:any): Observable<any> {
  const url="http://localhost:3000";
  const data=date+"-"+time+"-"+body;
  return this.client.get<any>(`${url}/${data}`);
}
getSelectedSeat(body:any){
  return this.client.get("http://localhost:3000/seat?id="+body);
}

reserveSeat(Body:any,date:any,Time:any,seatId: number): Observable<any> {

  const url="http://localhost:3000";
  const data=date+"-"+Time+"-"+Body;
  const url1=`${url}/${data}`
  console.log("URL"+url1);
  const updateUrl = `${url1}/${seatId}`;
console.log("Upadte"+updateUrl);
  return this.client.patch<any>(updateUrl, { reserved: true });
}
unreserveSeat(Body:any,date:any,Time:any,seatId: number): Observable<any> {
  const url="http://localhost:3000";
  const data=date+"-"+Time+"-"+Body;
  const url1=`${url}/${data}`
  const updateUrl = `${url1}/${seatId}`;
  return this.client.patch<any>(updateUrl, { reserved: false });
}
}
