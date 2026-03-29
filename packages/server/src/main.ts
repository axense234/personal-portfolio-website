// Nest
import { NestFactory } from '@nestjs/core';
// Main Module
import { AppModule } from './app.module';
// Pipes
import { ValidationPipe } from '@nestjs/common';
// Helmet
import helmet from 'helmet';
// Guards
import { ApiKeyGuard } from './guards';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [process.env.CLIENT as string],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
      credentials: false,
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  });

  // Global guards man
  app.useGlobalGuards(new ApiKeyGuard());

  // Security
  app.use(helmet());

  // Pipes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(PORT);
}
bootstrap();
