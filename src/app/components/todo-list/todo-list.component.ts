import { Component, model, OnInit } from '@angular/core';
import { Todo } from '../../models/todoModel';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  constructor(){}

  selected = model<Date | null>(null);
  
  tasks: Todo [] = [];
  newTask: string= "";

  ngOnInit(): void {
    
  }

  addToList (){
    if (this.newTask.trim() !== ''){
      const newTask: Todo = {
        id:this.tasks.length,
        taskName: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }

}

