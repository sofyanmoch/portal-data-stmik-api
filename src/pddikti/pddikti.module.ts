import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PddiktiService } from './pddikti.service';

@Module({
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5
    })],
    providers: [PddiktiService]
})
export class PddiktiModule {}
