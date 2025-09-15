export type ApiResponse<T> = {
  status_code: number;
  status: boolean;
  message: string;
  data: Data<T>;
};

export type Data<T> = {
  links: Links;
  count: number;
  total_count: number;
  results: T;
};

export interface Links {
  next: string;
  previous: string;
}

export type DetailApiResponse<T> = {
  status_code: number;
  status: boolean;
  message: string;
  data: T;
};

export type HttpsResp<T> = {
  status_code: number;
  status: boolean;
  message: string;
  data: T;
};
