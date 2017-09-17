import { PipeTransform, Pipe } from '@angular/core';

/**
 * [是&否]文本徽章化
 *
 * @example
 * ```html
 * <td [innerHTML]="enabled | yn"></td>
 * ```
 */
@Pipe({ name: 'yn' })
export class YNPipe implements PipeTransform {
    transform(value, yes: string, no: string): string {
        if (value === true) {
            return '<span class="badge badge-success">' + (yes || '是') + '</span>';
        } else {
            return '<span class="badge badge-error">' + (no || '否') + '</span>';
        }
    }
}
