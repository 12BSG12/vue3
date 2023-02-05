import type { AxiosError } from 'axios';
export interface ErrorResponse {
  message: string;
  stack?: string;
}

export type APIError = AxiosError<ErrorResponse>;
