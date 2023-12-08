import { Component } from '@angular/core';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  template: `
    <h1>ToDo Nolan</h1>
    <ul *ngFor="let tododo of todoList">
      <p *ngIf="!tododo.isCompleted">
        {{tododo.title}}
      </p>
      <br>
    <ul>
  `,
  styles: []
})

export class AppComponent {
  
  todoList = TODOS;

  ngonInit(){
    console.table(this.todoList);
    this.SelectTodo(8);
  }

  SelectTodo(id: number){
    console.table(this.todoList[id-1])
  }

}
