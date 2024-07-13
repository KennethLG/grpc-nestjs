import { Controller } from '@nestjs/common';
import { TodoService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Empty, TodoList } from './interfaces';

@Controller()
export class AppController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService', 'GetTodos')
  getTodos(empty: Empty): TodoList {
    return this.todoService.getTodos(empty);
  }
}
