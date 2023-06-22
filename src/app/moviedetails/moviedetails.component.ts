import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute,private registerService:RegisterService,private safe:DomSanitizer) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.receivedValue = params['value'];
    });
    this.registerService.GetMoviebyName(this.receivedValue).subscribe((data)=>{
      this.moviedetail=data;
      this.moviedetail.find((vedioUrl:any)=>this.vediourl=vedioUrl.vedio)
      this.safeurl=this.safe.bypassSecurityTrustResourceUrl(this.vediourl);
    })
  }

}
