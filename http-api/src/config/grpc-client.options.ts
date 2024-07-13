import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'todo',
    protoPath: join(__dirname, '../../../proto/ms-todo.proto'),
    url: 'localhost:5000',
  },
};
