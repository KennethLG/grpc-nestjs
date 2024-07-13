import { Module } from '@nestjs/common';
import { TodoController } from './app.controller';
import { TodoServiceClient } from './app.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoServiceClient],
})
export class AppModule {}
