import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Output() delItem = new EventEmitter<any>();
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    console.log(this.todoItem);
  }
  //set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todoItem.completed
    }
    return classes;
  }

  onDelete(todo) {
    console.log("delete")
    this.delItem.emit(todo);
  }

  onToggle(todo) {

    //UI Changes
    todo.completed = !todo.completed;

    //change on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })

  }

}
