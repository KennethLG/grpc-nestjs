import { Injectable, OnModuleInit } from '@nestjs/common';
import { TodoList } from './interfaces';
import { Observable } from 'rxjs';
import { grpcClientOptions } from './config/grpc-client.options';
import { Client, ClientGrpc } from '@nestjs/microservices';

interface TodoService {
  getTodos(empty: Record<string, never>): Observable<TodoList>;
}

@Injectable()
export class TodoServiceClient implements OnModuleInit {
  @Client(grpcClientOptions)
  private client: ClientGrpc;

  private todoService: TodoService;

  onModuleInit() {
    this.todoService = this.client.getService<TodoService>('TodoService');
  }

  getTodos(): Observable<TodoList> {
    return this.todoService.getTodos({});
  }
}
