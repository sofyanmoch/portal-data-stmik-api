import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Axios, AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom } from 'rxjs';
import { IBaseResponse } from './interface/pddikti.interface';

@Injectable()
export class PddiktiService {
    constructor(private readonly httpService: HttpService) {};

    async getProfile(): Promise<IBaseResponse> {
        const apiUrl = 'https://api-frontend.kemdikbud.go.id/v2/detail_pt/MkY2OURCQzYtNzA2QS00OEFGLUJFMUMtNDM1QTVBRUVFMDBB';
        const response = await firstValueFrom(
            this.httpService.get(apiUrl).pipe(
                catchError((error: AxiosError) => {
                    throw 'Happened unknown error!'
                })
            )
        );
        return { data: response?.data, status: response?.status, message: response?.statusText }
    }

    async getListProdi(): Promise<IBaseResponse> {
        const apiUrl = 'https://api-frontend.kemdikbud.go.id/v2/detail_pt_prodi/MkY2OURCQzYtNzA2QS00OEFGLUJFMUMtNDM1QTVBRUVFMDBB';
        const response = await firstValueFrom(
            this.httpService.get(apiUrl).pipe(
                catchError((error: AxiosError) => {
                    throw 'Happened unknown error!'
                })
            )
        );
        return { data: response?.data, status: response?.status, message: response?.statusText }
    }

    async getDetailProdi(id: string): Promise<IBaseResponse> {
        const apiUrl = `https://api-frontend.kemdikbud.go.id/detail_prodi/${id}/20231`
        const response = await firstValueFrom(
            this.httpService.get(apiUrl).pipe(
                catchError((error: AxiosError) => {
                    throw 'Happened unknown error!'
                })
            )
        );
        return { data: response?.data, status: response?.status, message: response?.statusText }
    }

    async getDetailDosen(id_reg: string): Promise<IBaseResponse> {
        const apiUrl = `https://api-frontend.kemdikbud.go.id/detail_dosen/${id_reg}`
        const response = await firstValueFrom(
            this.httpService.get(apiUrl).pipe(
                catchError((error: AxiosError) => {
                    throw 'Happened unknown error!'
                })
            )
        );
        return { data: response?.data, status: response?.status, message: response?.statusText }
    }

}
