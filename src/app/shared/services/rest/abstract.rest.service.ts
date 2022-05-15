import { Injectable } from '@angular/core';
import { _HttpClient, _HttpHeaders } from '@delon/theme';
import { Observable } from 'rxjs';

@Injectable()
export abstract class AbstractRestService {
  constructor(protected http: _HttpClient) {}
  abstract getBasePath(): string;

  protected get<T extends IResponse>(
    url: string,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'body';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T> {
    return this.http.get<T>(this.getBasePath() + url, params, options);
  }

  protected post<T extends IResponse>(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T> {
    return this.http.post<T>(this.getBasePath() + url, body, params, options);
  }

  protected put<T extends IResponse>(
    url: string,
    body?: any,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe: 'response';
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<T> {
    return this.http.put<T>(this.getBasePath() + url, body, params, options);
  }

  protected delete<T extends IResponse>(
    url: string,
    params?: any,
    options?: {
      headers?: _HttpHeaders;
      observe?: 'body' | 'events' | 'response';
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    }
  ): Observable<T> {
    return this.http.delete<T>(this.getBasePath() + url, params, options);
  }
}

export interface IResponse {
  statusCode: number;
  data?: any;
  message: string;
}
