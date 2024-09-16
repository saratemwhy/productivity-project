import { model, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { HabitTrackerComponent } from './components/habit-tracker/habit-tracker.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { TodoItemComponent } from './components/todoList/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    PomodoroTimerComponent,
    HabitTrackerComponent,
    TodoListComponent,
    TodoItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

