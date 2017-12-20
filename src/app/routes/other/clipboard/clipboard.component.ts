import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { NzClipboardService } from 'ng-clipboard-antd';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styles: []
})
export class ClipboardComponent {

    content = `time ${+new Date}

    中文！@#￥%……&*`;

    constructor(private srv: NzClipboardService, public messageSrv: NzMessageService) {}

    copy() {
        this.srv.copyFromContent(`time ${+new Date}`);
    }
}
