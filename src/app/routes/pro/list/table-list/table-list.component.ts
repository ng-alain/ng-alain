import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { getRule, saveRule, removeRule } from '../../../../../../_mock/rule.service';

@Component({
    selector: 'pro-table-list',
    templateUrl: './table-list.component.html'
})
export class ProTableListComponent implements OnInit {
    q: any = {
        pi: 1,
        ps: 10,
        sorter: '',
        status: -1,
        statusList: []
    };
    data: any[] = [];
    loading = false;
    selectedRows: any[] = [];
    curRows: any[] = [];
    totalCallNo = 0;
    allChecked = false;
    indeterminate = false;
    status = [
        { text: '关闭', value: false, type: 'default' },
        { text: '运行中', value: false, type: 'processing' },
        { text: '已上线', value: false, type: 'success' },
        { text: '异常', value: false, type: 'error' }
    ];
    sortMap: any = {};
    expandForm = false;
    modalVisible = false;
    description = '';

    constructor(public msg: NzMessageService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.pageChange(1).then(() => {
            this.q.statusList = this.status.map((i, index) => i.value ? index : -1).filter(w => w !== -1);
            if (this.q.status && this.q.status > -1) this.q.statusList.push(this.q.status);
            console.log(this.q);
            this.data = getRule(this.q).map(i => {
                const statusItem = this.status[i.status];
                i.statusText = statusItem.text;
                i.statusType = statusItem.type;
                return i;
            });
        });
    }

    add() {
        this.modalVisible = true;
        this.description = '';
    }

    save() {
        this.loading = true;
        saveRule(this.description);
        this.getData();
        setTimeout(() => this.modalVisible = false, 500);
    }

    remove() {
        this.selectedRows.forEach(i => removeRule(i.no));
        this.getData();
        this.clear();
    }

    approval() {
        this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
    }

    clear() {
        this.selectedRows = [];
        this.totalCallNo = 0;
        this.data.forEach(i => i.checked = false);
        this.refreshStatus();
    }

    checkAll(value: boolean) {
        this.curRows.forEach(i => {
            if (!i.disabled) i.checked = value;
        });
        this.refreshStatus();
    }

    refreshStatus() {
        const allChecked = this.curRows.every(value => value.disabled || value.checked);
        const allUnChecked = this.curRows.every(value => value.disabled || !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.selectedRows = this.data.filter(value => value.checked);
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
    }

    sort(field: string, value: any) {
        this.sortMap = {};
        this.sortMap[field] = value;
        this.q.sorter = value ? `${field}_${value}` : '';
        this.getData();
    }

    dataChange(res: any) {
        this.curRows = res;
        this.refreshStatus();
    }

    pageChange(pi: number): Promise<any> {
        this.q.pi = pi;
        this.loading = true;
        return new Promise((resolve) => {
            setTimeout(() => {
                this.loading = false;
                resolve();
            }, 500);
        });
    }

    reset(ls: any[]) {
        for (const item of ls) item.value = false;
        this.getData();
    }
}
