import { Component, Input } from '@angular/core';
import { NzModalSubject } from "ng-zorro-antd";
@Component({
    selector: 'app-model-custom',
    template: `
    <h3>From Custom Componetn!</h3>
    <p>Input Data: {{name}}</p>
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

    constructor(private subject: NzModalSubject) {}

    ok() {
        this.subject.next([`new time: ${+new Date}`]);
        this.cancel();
    }

    cancel() {
        this.subject.destroy('onCancel');
    }
}
