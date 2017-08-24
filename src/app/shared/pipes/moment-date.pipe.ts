import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * `ng-zorro-antd` 依赖了 moment ，因此，可以创建一个基于moment的 `_date` 格式化
 */
@Pipe({ name: '_date' })
export class MomentDatePipe implements PipeTransform {
    transform(value: Date, formatString: string): string {
        if (value) {
            return moment(value).format(formatString);
        } else {
            return '';
        }
    }
}
