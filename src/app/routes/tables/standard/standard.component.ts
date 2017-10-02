// tslint:disable:member-ordering
import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../randomUser.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-table-standard',
    templateUrl: './standard.component.html'
})
export class TableStandardComponent implements OnInit {

    data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }
    ];

    ageSort = '';

    ageSortChange($event) {
        if ($event === 'ascend') {
            this.data = [...this.data.sort((a, b) => {
                return a.age - b.age;
            })];
        } else if ($event === 'descend') {
            this.data = [...this.data.sort((a, b) => {
                return b.age - a.age;
            })];
        }
    }

    _allChecked = false;
    _indeterminate = false;
    _displayData = [];

    _displayDataChange($event) {
        this._displayData = $event;
        this._refreshStatus();
    }

    _refreshStatus() {
        const allChecked = this._displayData.every(value => value.checked === true);
        const allUnChecked = this._displayData.every(value => !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
    }

    _checkAll(value) {
        if (value) {
            this._displayData.forEach(data => {
                data.checked = true;
            });
        } else {
            this._displayData.forEach(data => {
                data.checked = false;
            });
        }
        this._refreshStatus();
    }

    // ajax
    _current = 1;
    _pageSize = 3;
    _total = 1;
    _ajaxDataSet = [];
    _ajaxLoading = true;

    constructor(private _randomUser: RandomUserService, private message: NzMessageService) { }

    _ajaxRefreshData = () => {
        this._ajaxLoading = true;
        this._randomUser.getUsers(this._current, this._pageSize).subscribe((data: any) => {
            this._ajaxLoading = false;
            this._total = 200;
            this._ajaxDataSet = data.results;
        });
    }

    ngOnInit() {
        this._ajaxRefreshData();

        this._genData();
    }

    // dynamic
    _dataSet = [];
    _bordered = false;
    _loading = false;
    _pagination = true;
    _header = true;
    _title = true;
    _footer = true;
    _size = 'small';
    _noresult = false;

    _toggleData() {
        if (this._noresult) {
            this._dataSet = [];
        } else {
            this._genData();
        }
    }

    _genData() {
        this._dataSet = [];
        for (let i = 1; i <= 10; i++) {
            this._dataSet.push({
                key: i,
                name: 'John Brown',
                age: `${i}2`,
                address: `New York No. ${i} Lake Park`,
                description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
            });
        }
    }

    cancel = function () {
        this.message.info('click cancel');
    };

    confirm = () => {
        this.message.success('click confirm');
    }
}
