import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  user: string = "swadhin";
  showHelloWorld: boolean = true;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });


  }

  onDelete(todo: Todo) {
    console.log(todo);

    //UI Changes
    this.todos=this.todos.filter(t=>t.id !== todo.id);

    //Server Changes
    this.todoService.deleteTodo(todo).subscribe(todo=>{

    });
  }


  //add todos
  addTodo(todo: Todo){
 this.todoService.addTodo(todo).subscribe(todo=>{
  this.todos.push(todo);
 });
  }




}
