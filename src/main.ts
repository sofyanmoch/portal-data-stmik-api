import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3001;

  const config = new DocumentBuilder()
    .setTitle('API Portal Data')
    .setDescription('API Portal Data Stmik Ymi Tegal Documentation')
    .setVersion('1.0')
    .addTag('portal-data')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(PORT || 3001);

  console.log(' === App running on port ' + PORT + ' === ')
}
bootstrap();