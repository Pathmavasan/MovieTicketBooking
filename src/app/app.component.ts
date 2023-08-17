import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { RegisterService } from 'src/register.service';
import { TimerService } from './Service/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeOut', [
      state('visible', style({
        opacity: 1
      })),
      transition(':leave', [
        animate('300ms', style({
          opacity: 0
        }))
      ])
  ])
]})

export class AppComponent implements OnInit {
  Title = "Book Your Show";
Search: any="";
  message!: string;
  visible: boolean = true;

  discountPercentage: number=50;
  remainingTime: any='';

constructor(private router:Router,public registerService:RegisterService,public timer:TimerService){

}

  ngOnInit() {
    this.calculateRemainingTime();
    setTimeout(() => {
      this.visible = false;
    }, 10000);
    interval(1000).subscribe(() => {
      this.calculateRemainingTime();
    });
    const offerEnd=this.registerService.offerEnd;
  }
  calculateRemainingTime() {
    const currentDate = new Date();
    const remainingTimeInMillis = this.registerService.offerEnd.getTime() - currentDate.getTime();

    if (remainingTimeInMillis > 0) {
      const seconds = Math.floor(remainingTimeInMillis / 1000) % 60;
      const minutes = Math.floor(remainingTimeInMillis / (1000 * 60)) % 60;
      const hours = Math.floor(remainingTimeInMillis / (1000 * 60 * 60)) % 24;
      const days = Math.floor(remainingTimeInMillis / (1000 * 60 * 60 * 24));

      this.remainingTime = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    } else {
      this.remainingTime = null;
    }
  }
  onAnimationEnd() {
    if (!this.visible) {
      const element = document.getElementById('flash-message');
      if (element) {
        element.remove();
      }
    }
  }
showLocationPopup: boolean = false;
  selectedLocation: string | undefined;

  openLocationPopup(): void {
    this.showLocationPopup = true;
  }

  handleLocationSelected(location: string): void {
    this.selectedLocation = location;
    this.showLocationPopup = false;
    sessionStorage.setItem("location",this.selectedLocation);
  }

  handlePopupClosed(): void {
    this.showLocationPopup = false;
  }
  home(){
    this.router.navigate([""])
  }
}


