export interface IBaseResponse extends IBase {
  data: any[];
}

export interface IDashboardDosenResponse extends IBase {
  data: IDashboardDosen;
}

export interface IDashboardDosen {
  totalDosen: number;
  byJenisKelamin: IJenisKelamin;
  jenjangDosen: IJenjangDosen;
  jabatanDosen: IJabatanDosen;
}

export interface IDashboardMahasiswaResponse extends IBase {
  data: IDashboardMahasiswa
}

export interface IDashboardMahasiswa {
  totalMahasiswa: number;
  totalByProdi: IProdi;
}

export interface IProdi {
  TI: number;
  SI: number;
}

export interface IJenjangDosen {
  S1?: number;
  S2?: number;
  S3?: number;
}

export interface IJabatanDosen {
  'Asisten Ahli'?: number;
  Lektor?: number;
  'Tanpa Jabatan'?: number;
  'Tenaga Kependidikan'?: number;
}

export interface IJenisKelamin {
  lakiLaki: number;
  perempuan: number;
}

export interface IDetailProdi {
  data: {
    datadosen: any;
    datadosenrasio: any;
    datamhs: any;
    detailumum: any;
    rasio: any;
  };
  status?: string | number;
  message?: string;
}

export interface IBase {
  status?: string | number;
  message?: string;
}
