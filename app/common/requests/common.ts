export interface ResponseAPI {
  message: string;
  status: number;
}

export interface ResponseDTO<T> extends ResponseAPI {
  data: T;
}

// fetch request 함수 fetch 옵션 타입 지정
export interface IRequestOptions extends RequestInit {
  query?: string | Record<string, any> | URLSearchParams | string[][];
}