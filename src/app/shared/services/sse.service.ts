import { Injectable } from '@angular/core';

@Injectable()
export class SseService {
  constructor() {}

  /**
   * Creates event source
   * @param url SSE URL Path
   * @returns Event Source
   */
  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}
