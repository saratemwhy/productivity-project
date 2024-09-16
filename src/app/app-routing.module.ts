import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { HabitTrackerComponent } from './components/habit-tracker/habit-tracker.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';



const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path: "pomodoro-timer", component: PomodoroTimerComponent
  },
  {
    path: "habit-tracker", component: HabitTrackerComponent
  },
  {
    path: "todo-list", component: TodoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
