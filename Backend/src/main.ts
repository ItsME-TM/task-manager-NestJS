import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API for managing tasks')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: [
      'https://task-manager-ashy-five.vercel.app',
      'https://task-manager-chbltum9r-thushans-projects-fa88839a.vercel.app',
      'https://task-manager-git-master-thushans-projects-fa88839a.vercel.app', 
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Keep this for auth-related requests
    allowedHeaders: 'Content-Type, Authorization', 
  });
  
  await app.listen(process.env.PORT || 3000); 
}
bootstrap(); 