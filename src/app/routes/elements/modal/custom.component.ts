import { Component, Input } from '@angular/core';
import { NzModalSubject, NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ModalHelper } from '@shared/helper/modal.helper';

@Component({
    selector: 'app-model-custom',
    template: `
    <div class="modal-header">
        <div class="modal-title">Custom component</div>
    </div>
    <h3>From Custom Componetn!</h3>
    <p>Input Data: {{name}}</p>
    <p>submodal: <a (click)="show()">show</a></p>
    <p>
        Popconfirm 气泡确认框：
        <nz-popconfirm [nzTitle]="'确定要删除这个任务吗？'">
            <a nz-popconfirm>删除</a>
        </nz-popconfirm>
    </p>
    <div class="modal-footer">
        <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()">
            Cancel
        </button>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
            OK
        </button>
    </div>
    `
})
export class ModelCustomComponent {

    @Input() name: string;

    constructor(
        private modalHelper: ModalHelper,
        private model: NzModalService,
        private msg: NzMessageService,
        private subject: NzModalSubject) {}

    show() {
        this.modalHelper
            .open(ModelCustomComponent, { name: 'From Submodal Data' }, 'sm', {
                zIndex: 1001 // https://github.com/NG-ZORRO/ng-zorro-antd/issues/317
            })
            .subscribe(result => this.msg.info(`subscribe sub status: ${JSON.stringify(result)}`));
    }

    ok() {
        this.subject.next(`new time: ${+new Date}`);
        this.cancel();
    }

    cancel() {
        this.subject.destroy();
    }
}
