import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SseService {
  constructor(private _zone: NgZone) {}

  /**
   * Creates event source
   *
   * @param url SSE URL Path
   * @returns Event Source
   */
  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }

  /**
   * Returns the event source stream
   *
   * @param url SSE URL Path
   * @returns observable stream of SSE
   */
  getServerSentEvent(url: string): Observable<any> {
    return Observable.create((observer: any) => {
      const eventSource = this.getEventSource(url);
      eventSource.addEventListener('newData', res => {
        this._zone.run(() => {
          observer.next(res);
        });
      });

      eventSource.addEventListener('keepAlive', () => {});

      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }
}
