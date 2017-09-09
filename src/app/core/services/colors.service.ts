import { Injectable } from '@angular/core';

@Injectable()
export class ColorsService {

    APP_COLORS = {
        primary:    '#108ee9',
        success:    '#00a854',
        error:      '#f04134',
        warning:    '#ffbf00',
        red:        '#f04134',
        green:      '#00a854',
        blue:       '#108ee9',
        pink:       '#f5317f',
        orange:     '#f56a00',
        purple:     '#7265e6',
        yellow:     '#ffbf00',
        cyan:       '#00a2ae',
        teal:       '#20C997',
        grey:       '#bfbfbf'
    };

    constructor() { }

    byName(name: string) {
        return (this.APP_COLORS[name] || '#fff');
    }

    get colors() {
        return this.APP_COLORS;
    }

    get names() {
        return [ 'red', 'green',  'blue', 'pink', 'orange', 'purple', 'yellow', 'cyan', 'teal', 'grey' ];
    }

    get brands() {
        return [ 'primary', 'success', 'error', 'warning'];
    }

}
