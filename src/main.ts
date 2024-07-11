import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const protoPath = join(__dirname, 'hero/hero.proto');
  console.log('🚀 ~ bootstrap ~ protoPath:', protoPath);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath,
    },
  });

  await app.listen();
}
bootstrap();
