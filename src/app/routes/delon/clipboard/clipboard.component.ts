import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { copy } from '@delon/abc';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html'
})
export class ClipboardComponent {

    content = `time ${+new Date}

    中文！@#￥%……&*`;

    constructor(public messageSrv: NzMessageService) {}

    onCopy() {
        copy(`time ${+new Date}`).then(() => this.messageSrv.success(`success`));
    }
}
