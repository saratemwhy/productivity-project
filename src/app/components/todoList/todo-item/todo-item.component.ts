import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../models/todoModel';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() tasks: Todo[] = [];
  
  ngOnInit(): void {
    
  }
  

  toggleCompleted(task:Todo) {
    task.completed = !task.completed;
  }
    
    
}
