import { Controller, Get } from '@nestjs/common';
import { TodoServiceClient } from './app.service';
import { Observable } from 'rxjs';
import { TodoList } from './interfaces';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoServiceClient: TodoServiceClient) {}

  @Get()
  getTodos(): Observable<TodoList> {
    return this.todoServiceClient.getTodos();
  }
}
