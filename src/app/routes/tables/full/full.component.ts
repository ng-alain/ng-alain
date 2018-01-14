import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';
import { RandomUserService } from '../randomUser.service';

@Component({
    selector: 'app-table-full',
    templateUrl: './full.component.html'
})
export class TableFullComponent implements OnInit {

    pi = 1;
    ps = 10;
    total = 200; // mock total
    list = [];
    loading = false;
    args: any = { };
    _indeterminate = false;
    _allChecked = false;

    events: any[] = [];

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }

        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._randomUser.getUsers(this.pi, this.ps, this.args)
            .pipe(
                map(data => {
                    data.results.forEach(item => {
                        item.checked = false;
                        item.price = +((Math.random() * (10000000 - 100)) + 100).toFixed(2);
                    });
                    return data;
                })
            )
            .subscribe(data => {
                this.loading = false;
                this.list = data.results;
            });
    }

    clear() {
        this.args = {};
        this.load(1);
    }

    _checkAll() {
        this.list.forEach(item => item.checked = this._allChecked);
        this.refChecked();
    }
    refChecked() {
        const checkedCount = this.list.filter(w => w.checked).length;
        this._allChecked = checkedCount === this.list.length;
        this._indeterminate = this._allChecked ? false : checkedCount > 0;
    }

    constructor(private _randomUser: RandomUserService, private http: _HttpClient, private message: NzMessageService) {
    }

    ngOnInit() {
        this.load();
        this.http.get('/chart/visit').subscribe((res: any) => this.events = res);
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }
}
