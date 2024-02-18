import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  workoutTime: any; // Workout time in seconds
  gworkoutTime: any; // Workout time in seconds
  gbreakTime: any; // Break time in seconds
  breakTime: any; // Break time in seconds
  totalSets: any; // Total number of sets
  currentSet: number = 0;
  showflag = true;

  ngOnInit(): void {
  }

  globalassign(){
    this.gworkoutTime = this.workoutTime;
    this.gbreakTime = this.breakTime;
    this.showflag = false;
  }

  start(){
      setTimeout(() => {
        if(this.workoutTime > 0){
          this.workoutTime --;
        this.start();
      }else{
        this.break();
      }
      },1000)
  }

  break(){
    setTimeout(() => {
      if (this.breakTime > 0) {
        this.breakTime--;
        this.break();
      } else {
        this.currentSet++;
        if (this.currentSet < this.totalSets) {
          this.workoutTime = this.gworkoutTime;
          this.breakTime = this.gbreakTime;
          this.start();
        } else {
          this.showflag = true;
          this.totalSets = 0;
        }
      }
    }, 1000);
  }


}
