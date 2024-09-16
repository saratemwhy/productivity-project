import { Component, contentChild, OnInit } from '@angular/core';
import { IHabit } from '../../models/habitModel';
import { count } from 'rxjs';

@Component({
  selector: 'app-habit-tracker',
  templateUrl: './habit-tracker.component.html',
  styleUrl: './habit-tracker.component.css'
})
export class HabitTrackerComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {

  }

  habitsArray=["Healthy food", "Walking", "Drink water", "Meditate 15 minutes", "Read 10 pages"]
  habits:IHabit[]=[];
  newHabit: string="";
  arrayDay=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  checked: boolean[][] = [];
  c!:number;

  

  addHabit(){
    if (this.newHabit.trim() !== ''){
      const newHabit: IHabit = {
        id:this.habits.length,
        habitName: this.newHabit
      };
      this.habits.push(newHabit);
      this.checked.push(new Array(this.arrayDay.length).fill(false));
      this.newHabit = '';
    }
  }

  habitDone(day:string, id:number, i:number){
    let buttonDay= document.getElementById('buttonDay'+[id]+[i]) as HTMLButtonElement;
    let counterDay = document.getElementById('counterDay'+[id]) as HTMLParagraphElement;
    
    if(day){
      this.checked[id][i] = !this.checked[id][i];
    }

    if(this.checked[id][i]){
      buttonDay.innerHTML+=" ✔";
      this.c=Number(counterDay.textContent)+1;
      counterDay.innerHTML=this.c.toString()
      buttonDay.setAttribute("class", "btn btn-success day");
      
    }else {
      let d= this.arrayDay[i];
      buttonDay.innerHTML=d;
      this.c=Number(counterDay.textContent)-1;
      counterDay.innerHTML=this.c.toString()
      buttonDay.setAttribute("class", "btn btn-outline-secondary day");
    }
    
  }

  addPreHabit(h: string) {
    const newHabit: IHabit = {
      id: this.habits.length,
      habitName: h
    };
    this.habits.push(newHabit);
    this.checked.push(new Array(this.arrayDay.length).fill(false));
  }
  
}
