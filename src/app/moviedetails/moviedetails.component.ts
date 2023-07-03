import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RegisterService } from 'src/register.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit{
  receivedValue:string="";
moviedetail:any='';
vediourl:any='';
safeurl:any=''
  constructor(private route: ActivatedRoute,private registerService:RegisterService,private safe:DomSanitizer,private router:Router) {}
  ngOnInit() {
    const url=this.router.url;
    console.log(url);
    const rouer=sessionStorage.setItem('target',url);
    this.route.queryParams.subscribe(params => {
      this.receivedValue = params['value'];
      console.log(sessionStorage.getItem('moviename'),sessionStorage.getItem('ShowDate'),sessionStorage.getItem('Timing'))
      sessionStorage.setItem('moviename',this.receivedValue);
    });

    this.registerService.GetMoviebyName(this.receivedValue).subscribe((data)=>{
      this.moviedetail=data;
      this.moviedetail.find((vedioUrl:any)=>this.vediourl=vedioUrl.vedio)
      this.safeurl=this.safe.bypassSecurityTrustResourceUrl(this.vediourl);
    })
  }

}
