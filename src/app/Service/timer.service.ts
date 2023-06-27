import { Injectable } from '@angular/core';
import { Subject, Observable, takeUntil, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private countdownTimerSubject: Subject<{ days: number, hours: number, minutes: number, seconds: number }>;
  public countdownTimer: Observable<{ days: number, hours: number, minutes: number, seconds: number }>;

  constructor() {
    this.countdownTimerSubject = new Subject<{days:number,hours:number,minutes:number,seconds:number}>();
    this.countdownTimer = this.countdownTimerSubject.asObservable();
  }
  startCountdown(offerEndTime: Date) {
    const currentTime = new Date().getTime();
    const endTime = offerEndTime.getTime();
    const duration = Math.max(0, endTime - currentTime);

    timer(0, 1000)
      .pipe(takeUntil(timer(duration)))
      .subscribe((elapsedMilliseconds: number) => {
        const remainingMilliseconds = duration - elapsedMilliseconds;
        if (remainingMilliseconds >= 0) {
          const remainingSeconds = Math.floor(remainingMilliseconds / 1000);
          const days = Math.floor(remainingSeconds / 86400);
          const hours = Math.floor((remainingSeconds % 86400) / 3600);
          const minutes = Math.floor((remainingSeconds % 3600) / 60);
          const seconds = remainingSeconds % 60;

          this.countdownTimerSubject.next({ days, hours, minutes, seconds });
        } else {
          this.countdownTimerSubject.complete();
        }
      });
  }
  get countdownTimert(): Observable<{ days: number; hours: number; minutes: number; seconds: number; }> {
    return this.countdownTimer;
  }

}
