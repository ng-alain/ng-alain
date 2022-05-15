import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dashNull' })
export class DashNullPipe implements PipeTransform {
  transform(value: string | number, displayValue: string = '-'): string | number {
    if (value === 0) {
      return 0;
    }

    if (value) {
      return value;
    } else {
      return displayValue;
    }
  }
}
