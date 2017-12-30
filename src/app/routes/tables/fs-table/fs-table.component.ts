import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import { SimpleTableChange, SimpleTableColumn, SimpleTableButton } from '@delon/abc';
import { _HttpClient } from '@delon/theme';
import { RandomUserService } from '../randomUser.service';

@Component({
    selector: 'app-fs-table',
    templateUrl: './fs-table.component.html'
})
export class FSTableComponent implements OnInit {

    ps = 10;
    total = 200; // mock total
    args: any = { _allow_anonymous: true };
    url = `https://api.randomuser.me/?results=10`;
    events: any[] = [];
    columns: SimpleTableColumn[] = [
        { title: 'id', index: 'id.value', type: 'checkbox' },
        { title: 'Avatar', index: 'picture.thumbnail', type: 'img', width: '60px' },
        { title: 'Name', index: 'name.first', width: '120px', format: (item: any) => `${item.name.first} ${item.name.last}` },
        { title: 'Email', index: 'email' },
        { title: 'Gender', index: 'gender', type: 'yn', ynTruth: 'female', ynYes: '男', ynNo: '女', width: '120px' },
        { title: 'Events', render: 'events', width: '60px' },
        { title: 'Registered', index: 'registered', type: 'date', width: '130px' },
        {
            title: 'Actions',
            width: '120px',
            buttons: <SimpleTableButton[]>[
                {
                    text: 'Edit',
                    click: (item: any) => this.message.info(`edit [${item.id.value}]`)
                },
                {
                    text: 'Delete',
                    type: 'del',
                    click: (item: any) => this.message.info(`deleted [${item.id.value}]`)
                }
            ]
        }
    ];

    constructor(private _randomUser: RandomUserService, private http: _HttpClient, private message: NzMessageService) {
    }

    ngOnInit(): void {
        this.http.get('/chart/visit').subscribe((res: any[]) => this.events = res.slice(0, 8));
    }
}
