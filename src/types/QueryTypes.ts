export interface IQueries {
  idCustomer: string;
  idUser: string;
  level: string;
  source: string;
  dateFrom: number;
  dateTo: number;
  limit: string;
}

export interface ILog {
  id: number;
  date: number;
  id_firma: number;
  id_user: number;
  id_car: number;
  id_data: number;
  level: number;
  quelle: number;
  msg: string;
  id_portal: number;
  id_proto: number;
  status: number;
  topic?: string;
}

export type TResults = ILog[];
