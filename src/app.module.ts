import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PddiktiController } from './pddikti/pddikti.controller';
import { PddiktiService } from './pddikti/pddikti.service';
import { HttpModule } from '@nestjs/axios';
import { PddiktiModule } from './pddikti/pddikti.module';

@Module({
  imports: [HttpModule, PddiktiModule],
  controllers: [AppController, PddiktiController],
  providers: [AppService, PddiktiService],
})
export class AppModule {}
