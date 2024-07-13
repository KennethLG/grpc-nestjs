import { Injectable } from '@nestjs/common';
import { Todo, Empty, TodoList } from './interfaces';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [
    { id: '1', title: 'Task 1', completed: false },
    { id: '2', title: 'Task 2', completed: true },
  ];

  getTodos(_: Empty): TodoList {
    return { todos: this.todos };
  }
}
