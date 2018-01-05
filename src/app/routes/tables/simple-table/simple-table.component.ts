import { Component } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html'
})
export class DemoSimpleTableComponent {
    url = `https://randomuser.me/api/?results=10`;
    params = { a: 1, _allow_anonymous: true };
    // mock
    total = 100;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail', exported: false },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' },
        {
            title: '操作区',
            buttons: [
                { text: '删除', type: 'del', click: (record: any) => this.msg.success(`${record.email} has deleted!`) }
            ]
        }
    ];

    constructor(private msg: NzMessageService) {}
}
