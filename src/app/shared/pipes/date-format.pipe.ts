import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@delon/theme';

import { DateConstant } from '../constants/date.constant';

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  readonly DATE_FORMAT = DateConstant.DEFAULT_DATE_FORMAT;

  constructor(private datePipe: DatePipe) {}

  transform(value: Date | string | number, formatString: string = this.DATE_FORMAT): any {
    return this.datePipe.transform(value, formatString);
  }
}
