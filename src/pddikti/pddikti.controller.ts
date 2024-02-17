import { Controller, Get, Param } from '@nestjs/common';
import { PddiktiService } from './pddikti.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { IBaseResponse, IDashboardDosenResponse, IDashboardMahasiswaResponse, IDetailProdi } from './interface/pddikti.interface';

@ApiTags('pddikti')
@Controller('pddikti')
export class PddiktiController {
    constructor(private readonly pddiktiService: PddiktiService) {}

    @Get('/profile')
    getProfile(): Promise<IBaseResponse> {
        return this.pddiktiService.getProfile();
    }

    @Get('/prodi')
    getListProdi(): Promise<IBaseResponse> {
        return this.pddiktiService.getListProdi();
    }

    @Get('/prodi/:id')
    @ApiParam({ name: 'id', type: String, description: 'Id Prodi - Get from list prodi' })
    getDetailProdi(@Param('id') id: string): Promise<IDetailProdi> {
        return this.pddiktiService.getDetailProdi(id);
    }

    @Get('/dosen/:id')
    @ApiParam({ name: 'id', type: String, description: 'Id Dosen' })
    getDetailDosen(@Param('id') id: string): Promise<IBaseResponse> {
        return this.pddiktiService.getDetailDosen(id);
    }

    @Get('/grouping-dosen')
    getDataGroupingDosen(): Promise<IBaseResponse> {
        return this.pddiktiService.getDataGroupingDosen();
    }

    @Get('/dashboard-dosen')
    getDaashboardDosen(): Promise<IDashboardDosenResponse> {
        return this.pddiktiService.getDashboardDosen();
    }

    @Get('/dashboard-mahasiswa')
    getDashboardMahasiswa(): Promise<IDashboardMahasiswaResponse> {
        return this.pddiktiService.getDashboardMahasiswa();
    }

    @Get('/list-dosen-ti')
    getListDosenTI(): Promise<IBaseResponse> {
        return this.pddiktiService.getListDosenTI()
    }

    @Get('/list-dosen-si')
    getListDosenSI(): Promise<IBaseResponse> {
        return this.pddiktiService.getListDosenSI()
    }
}
