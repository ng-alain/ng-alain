import { Component } from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    gutter = 16;
    count = 4;
    marksGutter = {
        8: 8,
        16: 16,
        24: 24,
        32: 32,
        40: 40,
        48: 48
    };
    marksCount = {
        2: 2,
        3: 3,
        4: 4,
        6: 6,
        8: 8,
        12: 12
    };

    generateArray(value) {
        return new Array(value);
    }

    code: string = '';
    generateCode() {
        let html = [];
        html.push(`<div nz-row [nzGutter]="${this.gutter}">\r\n`);
        for (let i of this.generateArray(this.count)) {
            html.push(`    <div nz-col [nzSpan]="${24 / this.count}"></div>\r\n`)
        }
        html.push(`</div>`)
        this.code = html.join('');
    }

    orderList = [1, 2, 3, 4];

    ngOnInit() {

        this.generateCode();

        setTimeout(_ => {
            this.orderList = [...this.orderList.reverse()];
        }, 10000)
    }
}
