import { PipeTransform, Pipe } from '@angular/core';

/**
 * 将对象数组化
 *
 * @example
 * ```
 * const data = { name: 'cipchk', address: { city: 'shanghai', district: 'changning' } };
 * <div *ngFor="let item of data | keys">{{item.value.city}} {{item.value.district}}</div>
 * ```
 */
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value, args: string[]): any {
        const keys = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    }
}
