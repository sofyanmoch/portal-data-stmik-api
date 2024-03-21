import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DataService } from './data.service';
import { IBase, IBaseResponse } from 'src/pddikti/interface/pddikti.interface';
import { TypeGetData } from './enum/data.enum';

@ApiTags('data')
@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) {}

    @Get('/fetch-data')
    @ApiQuery({
        name: 'type',
        enum: TypeGetData,
      })
    fetchData(@Query('type') type: TypeGetData): Promise<IBase> {
      return this.dataService.getData(type);
    }
}
