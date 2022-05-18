import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class EventService {
  private channels: { [key: string]: Subject<any> } = {};

  /**
   * Subscribe to a topic and provide a single handler/observer.
   *
   * @param topic The name of the topic to subscribe to.
   * @param observer The observer or callback function to listen when changes are published.
   *
   * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
   */
  subscribe(topic: string, observer: (_: any) => void): Subscription {
    if (!this.channels[topic]) {
      this.channels[topic] = new Subject<any>();
    }

    return this.channels[topic].subscribe(observer);
  }

  /**
   * Publish some data to the subscribers of the given topic.
   *
   * @param topic The name of the topic to emit data to.
   * @param data data in any format to pass on.
   */
  publish(topic: string, data: any): void {
    const subject = this.channels[topic];
    if (!subject) {
      // Or you can create a new subject for future subscribers
      return;
    }

    subject.next(data);
  }

  /**
   * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
   * destroy the observable of the topic using this method.
   *
   * @param topic The name of the topic to destroy.
   */
  destroy(topic: string): void {
    const subject = this.channels[topic];
    if (!subject) {
      return;
    }

    subject.complete();
    delete this.channels[topic];
  }
}
