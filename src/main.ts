import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, // DTO에 없는 파라미터가 들어왔을 시 알려줌
    transform: true // 타입 변환을 자동으로 시켜줌
  }));
  await app.listen(3000);
}
bootstrap();
