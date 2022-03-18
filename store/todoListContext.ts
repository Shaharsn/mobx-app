import { makeAutoObservable } from "mobx";

// Mobx class (like the reducer in Redux)
export interface IBlock {
  todos: Array<string>;
}

export class TodoListContext {
  todos: Array<string> = ["Start"];

  constructor() {
    makeAutoObservable(this);
  }

  // Methods

  addTodo(message: string) {
    this.todos.push(message);
  }

  removeTodo(message: string) {
    this.todos = this.todos.filter((t) => t !== message);
  }
}
