import { Component, Inject, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { copy } from '@delon/abc';

@Component({
    selector: 'app-iconsfont',
    templateUrl: './iconsfont.component.html',
    styleUrls: [ './iconsfont.component.less' ]
})
export class IconsFontComponent implements OnInit {
    data = [];

    constructor(private msg: NzMessageService, private http: _HttpClient) { }

    ngOnInit(): void {
        this.http.get('./assets/iconsfont.json').subscribe((res: any) => this.data = res);
    }

    onCopy(group: any, item: any) {
        copy(group.tpl.replace(`{0}`, item.k)).then(() => this.msg.success(`Copied Success!`));
    }
}
