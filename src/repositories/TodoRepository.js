import { Todo } from "../entities/Todo.js";

class TodoRepository {
  constructor() {
    this.todos = [];
  }

  static getIntance() {
    if (!TodoRepository.INSTANCE) {
      TodoRepository.INSTANCE = new TodoRepository();
    }
    return TodoRepository.INSTANCE;
  }

  list() {
    return this.todos;
  }

  create(description) {
    const todo = new Todo();
    Object.assign(todo, {
      description,
    });
    this.todos.push(todo);
    return todo;
  }

  delete(id) {
    const removedTodo = this.findById(id);
    const indexTodo = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(indexTodo, 1);
    return removedTodo;
  }

  check(id) {
    const todo = this.findById(id);
    todo.done = !todo.done;
    todo.edited_at = new Date().toISOString();
    return todo;
  }

  findById(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo;
  }
}

export { TodoRepository };
