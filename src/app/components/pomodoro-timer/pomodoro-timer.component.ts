import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrl: './pomodoro-timer.component.css'
})
export class PomodoroTimerComponent {

  workMinutes=25;
  workSeconds=0;
  break=5;
  minutes: number= this.workMinutes-1;
  seconds:number=59;
  interval:any=0;
  

  increaseTime(){
    if(this.workMinutes<60){
      this.workMinutes+=1;
    }
  }

  reduceTime(){
    if(this.workMinutes>1){
      this.workMinutes-=1;
      
    }
    
  }
  

  getStart(){
    const startButton=document.getElementById('startButton') as HTMLButtonElement;
    startButton.setAttribute("disabled", "disabled")
    let min=document.getElementById('minutesDiv')?.textContent;
    this.workMinutes=Number(min)-1;
    this.workSeconds=this.seconds;
    
    this.interval= setInterval(()=> counter(), 1000)

    let counter = ()=>{
      this.workSeconds--
      if (this.workSeconds <= 0) {
        this.workMinutes-=1
        this.workSeconds = 59; 
      }
      if (this.workMinutes ==0 && this.workSeconds==1) {
        clearInterval(this.interval);
        this.workMinutes=0;
        this.workSeconds=0;
        startButton.setAttribute("disabled", "")
      }
    }
  }

  getPause(){
    const pauseButton=document.getElementById('pauseButton') as HTMLDivElement;
    const resumeButton= document.getElementById('resumeButton') as HTMLDivElement;
    resumeButton.setAttribute("style", "display:unset");
    pauseButton.setAttribute("style", "display:none");
    clearInterval(this.interval);
  }

  getResume(){
      const pauseButton=document.getElementById('pauseButton') as HTMLDivElement;
      const resumeButton= document.getElementById('resumeButton') as HTMLDivElement;
      resumeButton.setAttribute("style", "display:none");
      pauseButton.setAttribute("style", "display:unset");
      let min=document.getElementById('minutesDiv')?.textContent;
      let sec=document.getElementById('secondsDiv')?.textContent;
      this.workMinutes=Number(min);
      this.workSeconds=Number(sec);
      
      this.interval= setInterval(()=> counter(), 1000)

      let counter = ()=>{
        this.workSeconds--
        if (this.workSeconds <= 0) {
          this.workMinutes-=1
          this.workSeconds = 59; 
        }
        if (this.workMinutes ==0 && this.workSeconds==1) {
          clearInterval(this.interval);
          this.workMinutes=0;
          this.workSeconds=0;
        }
    }
  }

  getStop(){
    clearInterval(this.interval);
    this.workMinutes=25;
    this.workSeconds=0;
    const startButton=document.getElementById('startButton') as HTMLButtonElement;
    startButton.removeAttribute("disabled")
  }
  
}
