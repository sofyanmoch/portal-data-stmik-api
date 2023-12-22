export interface IBaseResponse {
    data: any[];
    status?: string | number;
    message?: string;
  }

  export interface IDashboardDosenResponse {
    data: {
      byJenisKelamin: IJenisKelamin;
      totalDosen: number;
    };
    status?: string | number;
    message?: string;
  }

  export interface IJenisKelamin {
    lakiLaki: number;
    perempuan: number
  }

  export interface IDetailProdi {
    data: {
      datadosen: any;
      datadosenrasio: any;
      datamhs: any;
      detailumum: any;
      rasio: any
    }
    status?: string | number;
    message?: string;
  }