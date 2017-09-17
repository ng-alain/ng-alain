import { Component, Input } from '@angular/core';
import { NzModalSubject, NzModalService, NzMessageService } from "ng-zorro-antd";
@Component({
    selector: 'app-model-custom',
    template: `
    <h3>From Custom Componetn!</h3>
    <p>Input Data: {{name}}</p>
    <p>submodal: <a (click)="show()">show</a></p>
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
        private model: NzModalService,
        private msg: NzMessageService,
        private subject: NzModalSubject) {}

    show() {
        this.model.open({
            wrapClassName: 'modal-sm',
            title: 'Are you sure?',
            content: ModelCustomComponent,
            footer: false,
            componentParams: {
                name: 'From Submodal Data'
            },
            zIndex: 1001 // https://github.com/NG-ZORRO/ng-zorro-antd/issues/317
        }).subscribe(result => {
            if (Array.isArray(result))
                this.msg.info(`subscribe sub status: ${JSON.stringify(result)}`);
        });
    }

    ok() {
        this.subject.next([`new time: ${+new Date}`]);
        this.cancel();
    }

    cancel() {
        this.subject.destroy('onCancel');
    }
}
