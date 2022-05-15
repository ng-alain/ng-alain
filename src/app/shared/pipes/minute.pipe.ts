import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'minute' })
export class MinutePipe implements PipeTransform {
  constructor() {}

  transform(seconds: number): any {
    const minutes: number = Math.floor(seconds / 60);
    const tailingSeconds: number = seconds % 60;

    return `${minutes}:${tailingSeconds.toString().padStart(2, '0')}`;
  }
}
