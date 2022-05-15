export interface APIResponse<T> {
  data?: T;
  statusCode: number;
  message: string;
  total?: number;
}
