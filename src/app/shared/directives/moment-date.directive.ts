import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'mDate' })
export class MomentDatePipe implements PipeTransform {
    transform(value: Date, formatString: string): string {
        if (value) {
            return moment(value).format(formatString);
        } else {
            return '';
        }
    }
}
